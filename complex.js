(function(global, angular) {
    'use strict';

    angular.module('jetapp')

        /*
         * '#/requests/detail/:id'
         */
        .controller('AbstractRequestController', function($scope, $location, $state, $stateParams, $log, $q, $filter, $timeout, $cookies, apiService, appFnService, debounce, mainApi, appConstants) {

            $(document).on('keydown', ':input[type="number"], [contenteditable]', function (e) {
                var code = e.keyCode || e.which;
                // Allow: backspace, delete, tab, escape, enter and .
                if ($.inArray(code, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
                    // Allow: Ctrl+A, Command+A
                    (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
                    // Allow: home, end, left, right, down, up
                    (code >= 35 && code <= 40)) {
                    // let it happen, don't do anything
                    return;
                }
                // Ensure that it is a number and stop the keypress
                if ((e.shiftKey || (code < 48 || code > 57)) && (code < 96 || code > 105)) {
                    e.preventDefault();
                }
            });

            $(document).on('keydown', '[integeronly], .integeronly', function (e) {
                var code = e.keyCode || e.which;
                // Allow: backspace, delete, tab, escape, enter
                if ($.inArray(code, [46, 8, 9, 27, 13]) !== -1 ||
                    // Allow: Ctrl+A, Command+A
                    (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
                    // Allow: home, end, left, right, down, up
                    (code >= 35 && code <= 40)) {
                    // let it happen, don't do anything
                    return;
                }
                // Ensure that it is a number and stop the keypress
                if ((e.shiftKey || (code < 48 || code > 57)) && (code < 96 || code > 105)) {
                    e.preventDefault();
                }
            });

            // ************************************************************************************
            // CONTROLLER SCOPED FNs  ** only available for AbstractRequestController **
            // ************************************************************************************

            function partitionLinkedUsers(users) {
                var lkFn = {
                    Administrator: function(user) {
                        apiService.searchEmployeeByLanId(user.LanId).then(function(data) {
                            $scope.administrator.user = angular.extend({}, user, data);
                            if ($scope.administrator.user.LanId.toLowerCase() === $scope.currentUser.LanId.toLowerCase()) {
                                $scope.currentUser.RequestRole = 'administrator';
                            }
                        });
                    },
                    'Operations Manager': function(user) {
                        apiService.searchEmployeeByLanId(user.LanId).then(function(data) {
                            $scope.opsmgr.user = angular.extend({}, user, data);
                            if ($scope.opsmgr.user.LanId.toLowerCase() === $scope.currentUser.LanId.toLowerCase()) {
                                $scope.currentUser.RequestRole = 'opsmgr';
                            }
                        });
                    },
                    Creator: function(user) {
                        apiService.searchEmployeeByLanId(user.LanId).then(function(data) {
                            $scope.requester.user = angular.extend({}, user, data);
                        });
                    },
                    Collaborator: function(user) {
                        apiService.searchEmployeeByLanId(user.LanId).then(function(data) {
                            $scope.collaborators.list.push(data);
                        });
                    },
                    Advocate: function(user) {
                        apiService.searchEmployeeByLanId(user.LanId).then(function(data) {
                            $scope.advocate.user = angular.extend({}, user, data);
                        });
                    }
                };

                if (users && angular.isArray(users)) {
                    jQuery.each(users, function() {
                        if (lkFn[this.Role]) {
                            lkFn[this.Role](this);
                        }
                    });
                }

                $timeout(function() {
                    $scope.isRequestAssigned = true;
                });
            }

            function scaffoldRequest(data) {

                // scaffold out sub objects of request before assigning to $scope
                data.Standardization = data.Standardization || {
                        RequestId: $scope.requestId
                    };
                data.Standardization.SitesThatPerformTheSameTest = data.Standardization.SitesThatPerformTheSameTest || '';
                data.Standardization.SitesThatPerformCommonTests = data.Standardization.SitesThatPerformCommonTests || '';
                data.Standardization.SitesThatPurchaseCommonReagents = data.Standardization.SitesThatPurchaseCommonReagents || '';

                if (!data.CapacityAnalysis) {

                    data.CapacityAnalysis = {
                        RequestId: $scope.requestId
                    };

                    apiService.createCapacityAnalysis(data.CapacityAnalysis);
                }

                data.CapacityAnalysis = data.CapacityAnalysis || {
                        RequestId: $scope.requestId
                    };

                if (!data.ProfitabilityImpact) {

                    data.ProfitabilityImpact = {
                        RequestId: $scope.requestId
                    };

                    apiService.createProfitabilityImpact(data.ProfitabilityImpact);
                }

                data.ProfitabilityImpact = data.ProfitabilityImpact || {
                        RequestId: $scope.requestId
                    };

                data.CapacityAnalysis.CachedLabTests = data.CapacityAnalysis.CachedLabTests || [];

                data.ProfitabilityImpact.ProfitabilityLabAssets = data.ProfitabilityImpact.ProfitabilityLabAssets || [];

                data.OperationalEfficiency = data.OperationalEfficiency || {
                        RequestId: $scope.requestId
                    };

                data.Criticality = data.Criticality || {
                        RequestId: $scope.requestId
                    };

                return data;
            }

            // ************************************************************************************
            // VARS
            // ************************************************************************************

            $scope.$location = $location;
            $scope.$state = $state;
            $scope.isReadOnly = false;

            if ($stateParams.id) {
                $scope.requestId = $stateParams.id;
                $cookies.requestId = $stateParams.id;
            } else if ($location.search() && $location.search().requestId) {
                $scope.requestId = $location.search().requestId;
                $cookies.requestId = $stateParams.id;
            } else if ($cookies.requestId) {
                $scope.requestId = $cookies.requestId;
            } else {
                $state.go('requests.list');
                throw new Error('Request Id is unknown');
            }

            $scope.currentDate = new Date();
            $scope.request = {};
            $scope.LabAssetPAUs = [];
            $scope.LabTestPAUs = [];
            $scope.CachedLabTests = [];
            $scope.CachedLabAssets = [];
            $scope.Laboratories = [];
            $scope.Divisions = [];
            $scope.Departments = [];
            $scope.Sites = [];
            $scope.isRequestAssigned = false;
            $scope.administrator = {
                header: 'Approving Administrator',
                label: "Updated Administrator's LAN Id"
            };
            $scope.opsmgr = {
                header: 'Approving Operations Manager',
                label: "Updated Ops Manager's LAN Id"
            };
            $scope.collaborators = {
                header: 'Collaborators',
                list: [],
                label: 'Lan Id of the collaborator to add'
            };
            $scope.requester = {
                header: 'Requester'
            };
            $scope.advocate = {
                header: 'Request Advocate'
            };
            $scope.advocateProxy = {
                header: 'Request Advocate Proxy'
            };

            apiService.getCurrentUser().then(function(data) {
                $scope.currentUser = data;
            });

            // get Sites
            apiService.getSites().then(function(data) {
                $scope.Sites = $scope.Sites.concat(data);
            });

            // get some departments
            apiService.getDepartments().then(function(data) {
                $scope.Departments = $scope.Departments.concat(data);
            });

            // get divisions
            apiService.getDivisions().then(function(data) {
                $scope.Divisions = $scope.Divisions.concat(data);
            });

            // get labs
            apiService.getLaboratories().then(function (data) {
                $scope.Laboratories = $scope.Laboratories.concat(data);
            });

            // get lookup lists
            apiService.getLists().then(function(data) {

                if (data && data.length) {
                    var lists = {};
                    jQuery.each(data, function() {
                        lists[this.Name.split(' ').join('')] = this.JetListItems;
                    });
                    $scope.lists = lists;
                }
            });

            // init the request data
            if ($stateParams.data) {
                scaffoldRequest(data);
                // new request
                $scope.request = $stateParams.data;
                partitionLinkedUsers($stateParams.data.LinkedUsers);
            } else {
                // go get it
                apiService.getRequest($scope.requestId).then(function(data) {
                    scaffoldRequest(data);
                    $scope.request = data;
                    $scope.isReadOnly = $scope.request.State !== appConstants.STATES.inProgress && $scope.request.State !== appConstants.STATES.denied;
                    if ($scope.isReadOnly) {
                        mainApi.setMsg('READONLY');
                    }
                    $scope.CachedLabTests = $scope.request.CapacityAnalysis.CachedLabTests;
                    $scope.CachedLabAssets = $scope.request.ProfitabilityImpact.ProfitabilityLabAssets;
                    partitionLinkedUsers(data.LinkedUsers);
                });
                $scope.isVotingEnabled = true;
            }

            // get the request proxy (if one exists)
            apiService.getRequestProxy($scope.requestId).then(function (data) {
                $scope.advocateProxy.user = angular.extend({}, data);
            });

            // ************************************************************************************
            // ON-SCOPE FNs
            // ************************************************************************************

            $scope.updateTab = function($event) {
                var $target = $($event.target);
                if (!$target.hasClass('selected')) {
                    $('.selected').removeClass('selected');
                    if ($target.is('li')) {
                        $target.addClass('selected');
                    } else {
                        $target.closest('li').addClass('selected');
                    }
                }
            };

            $scope.toggleNav = function($event) {
                appFnService.toggle($event, jQuery('#tabnav_toggle'));
            };

            $scope.initSelectTab = function(state) {
                var $tabs = $('.tabnav, .tabnav--vertical');
                $tabs.find('.selected').removeClass('selected');
                $tabs.find('[ui-sref="' + state + '"]').addClass('selected');
            };

            $scope.isCapacityExceded = function(type) {
                var rtn = false;
                var types = {
                    CURRENT: function() {
                        rtn = $scope.calculations.availableCapacityCurrentTotal() < 0;
                    },
                    PROJECTED: function() {
                        rtn = $scope.calculations.availableCapacityProjectedTotal() < 0;
                    }
                };

                if (types[type]) {
                    types[type]();
                }

                return rtn;
            };

            $scope.scaffold = {

                /*
                 * SCAFFOLDING FOR OPERATIONAL EFFICIENCY
                 */
                turnaroundTime: [
                    {
                        name: 'Published',
                        valueModel: 'PublishedTurnAroundTimeValue',
                        unitsModel: 'PublishedTurnAroundTimeUnits',
                        minVal: 0
                    }, {
                        name: 'Current',
                        valueModel: 'CurrentTurnAroundTimeValue',
                        unitsModel: 'CurrentTurnAroundTimeUnits',
                        minVal: 0
                    }, {
                        name: 'Future',
                        valueModel: 'FutureTurnAroundTimeValue',
                        unitsModel: 'FutureTurnAroundTimeUnits',
                        minVal: 0
                    }
                ],

                /*
                 * SCAFFOLDING SPECIFIC TO CAPACITY ANALYSIS
                 */
                capacityIndices: [
                    {
                        name: 'Run time',
                        currentModel: 'runTimesCurrentTotal',
                        projectedModel: 'runTimesProjectedTotal',
                        calculation: true
                    }, {
                        name: 'Repeat',
                        currentModel: 'repeatCurrentTotal',
                        projectedModel: 'repeatProjectedTotal',
                        calculation: true
                    }, {
                        name: 'Maintenance',
                        currentModel: 'CurrentMaintenanceCapacityIndex',
                        projectedModel: 'FutureMaintenanceCapacityIndex'
                    }, {
                        name: 'Development',
                        currentModel: 'CurrentDevelopmentCapacityIndex',
                        projectedModel: 'FutureDevelopmentCapacityIndex'
                    }, {
                        name: 'QC/Standards',
                        currentModel: 'CurrentQcStandardsCapacityIndex',
                        projectedModel: 'FutureQcStandardsCapacityIndex'
                    }, {
                        name: 'Other',
                        currentModel: 'CurrentOtherCapacityIndex',
                        projectedModel: 'FutureOtherCapacityIndex'
                    }, {
                        name: 'Non-operational',
                        currentModel: 'nonOperationalCurrentTotal',
                        projectedModel: 'nonOperationalProjectedTotal',
                        calculation: true
                    }, {
                        name: 'Available capacity',
                        currentModel: 'availableCapacityCurrentTotal',
                        projectedModel: 'availableCapacityProjectedTotal',
                        calculation: true,
                        clss: true
                    }
                ],

                instrumentRunTimes: [
                    {
                        name: 'Sunday',
                        currentModel: 'CurrentSundayInstrumentRuntime',
                        projectedModel: 'FutureSundayInstrumentRuntime',
                        minVal: 0,
                        maxVal: 24
                    }, {
                        name: 'Monday',
                        currentModel: 'CurrentMondayInstrumentRuntime',
                        projectedModel: 'FutureMondayInstrumentRuntime',
                        minVal: 0,
                        maxVal: 24
                    }, {
                        name: 'Tuesday',
                        currentModel: 'CurrentTuesdayInstrumentRuntime',
                        projectedModel: 'FutureTuesdayInstrumentRuntime',
                        minVal: 0,
                        maxVal: 24
                    }, {
                        name: 'Wednesday',
                        currentModel: 'CurrentWednesdayInstrumentRuntime',
                        projectedModel: 'FutureWednesdayInstrumentRuntime',
                        minVal: 0,
                        maxVal: 24
                    }, {
                        name: 'Thursday',
                        currentModel: 'CurrentThursdayInstrumentRuntime',
                        projectedModel: 'FutureThursdayInstrumentRuntime',
                        minVal: 0,
                        maxVal: 24
                    }, {
                        name: 'Friday',
                        currentModel: 'CurrentFridayInstrumentRuntime',
                        projectedModel: 'FutureFridayInstrumentRuntime',
                        minVal: 0,
                        maxVal: 24
                    }, {
                        name: 'Saturday',
                        currentModel: 'CurrentSaturdayInstrumentRuntime',
                        projectedModel: 'FutureSaturdayInstrumentRuntime',
                        minVal: 0,
                        maxVal: 24
                    }
                ],

                RequestLabTestFields: [
                    {
                        name: 'Average monthly volume',
                        currentModel: 'CurrentMonthlyVolume',
                        projectedModel: 'FutureMonthlyVolume',
                        integeronly: true
                    }, {
                        name: 'Batch size',
                        currentModel: 'CurrentBatchSize',
                        projectedModel: 'FutureBatchSize',
                        integeronly: true
                    }, {
                        name: 'Process time (hrs)',
                        currentModel: 'CurrentProcessTime',
                        projectedModel: 'FutureProcessTime'
                    }, {
                        name: 'Repeat rate (%)',
                        currentModel: 'CurrentRepeatRate',
                        projectedModel: 'FutureRepeatRate',
                        minVal: 0,
                        maxVal: 100
                    }
                ],

                volumeDistribution: [
                    {
                        name: 'Sunday',
                        currentModel: 'CurrentSundayVolumeDistribution',
                        projectedModel: 'FutureSundayVolumeDistribution',
                        minVal: 0,
                        maxVal: 100
                    }, {
                        name: 'Monday',
                        currentModel: 'CurrentMondayVolumeDistribution',
                        projectedModel: 'FutureMondayVolumeDistribution',
                        minVal: 0,
                        maxVal: 100
                    }, {
                        name: 'Tuesday',
                        currentModel: 'CurrentTuesdayVolumeDistribution',
                        projectedModel: 'FutureTuesdayVolumeDistribution',
                        minVal: 0,
                        maxVal: 100
                    }, {
                        name: 'Wednesday',
                        currentModel: 'CurrentWednesdayVolumeDistribution',
                        projectedModel: 'FutureWednesdayVolumeDistribution',
                        minVal: 0,
                        maxVal: 100
                    }, {
                        name: 'Thursday',
                        currentModel: 'CurrentThursdayVolumeDistribution',
                        projectedModel: 'FutureThursdayVolumeDistribution',
                        minVal: 0,
                        maxVal: 100
                    }, {
                        name: 'Friday',
                        currentModel: 'CurrentFridayVolumeDistribution',
                        projectedModel: 'FutureFridayVolumeDistribution',
                        minVal: 0,
                        maxVal: 100
                    }, {
                        name: 'Saturday',
                        currentModel: 'CurrentSaturdayVolumeDistribution',
                        projectedModel: 'FutureSaturdayVolumeDistribution',
                        minVal: 0,
                        maxVal: 100
                    }
                ],

                /*
                 * SCAFFOLDING SPECIFIC TO PROFITABILITY IMPACTS
                 */

                monthlyExpenseTypes: [
                    {
                        name: 'Labor',
                        currentModel: 'LaborCurrentExpense',
                        projectedModel: 'LaborFutureExpense'
                    }, {
                        name: 'Supplies',
                        currentModel: 'SuppliesCurrentExpense',
                        projectedModel: 'SuppliesFutureExpense'
                    }, {
                        name: 'Maintenance contracts',
                        currentModel: 'MaintenanceContractsCurrentExpense',
                        projectedModel: 'MaintenanceContractsFutureExpense'
                    }, {
                        name: 'IT',
                        currentModel: 'InformationTechnologyCurrentExpense',
                        projectedModel: 'InformationTechnologyFutureExpense'
                    }, {
                        name: 'Other',
                        currentModel: 'OtherCurrentExpense',
                        projectedModel: 'OtherFutureExpense'
                    }
                ],

                expenseType: {
                    DEPRECIATION: function() {
                        return $scope.calculations.getCurrentProjectedDiff('Depreciation');
                    },
                    LABOR: function() {
                        return $scope.calculations.getCurrentProjectedDiff('Labor');
                    },
                    SUPPLIES: function() {
                        return $scope.calculations.getCurrentProjectedDiff('Supplies');
                    },
                    'MAINTENANCE CONTRACTS': function() {
                        return $scope.calculations.getCurrentProjectedDiff('MaintenanceContracts');
                    },
                    IT: function() {
                        return $scope.calculations.getCurrentProjectedDiff('InformationTechnology');
                    },
                    OTHER: function() {
                        return $scope.calculations.getCurrentProjectedDiff('Other');
                    }
                },

                expenseTotals: {
                    CURRENT: function() {
                        return $scope.calculations.getCurrentExpensesTotal();
                    },
                    FUTURE: function() {
                        return $scope.calculations.getProjectedExpensesTotal();
                    },
                    DIFFERENCE: function() {
                        return $scope.calculations.getExpensesDiffTotal();
                    }
                }
            };

            $scope.calculations = {

                /*
                 * CALCULATION SPECIFIC TO CAPACITY ANALYSIS
                 */
                _convertToFloat: function(num) {
                    return parseFloat(num.toFixed(2));
                },

                getCurrentVolumeDistributionTotal: function() {
                    if (!$scope.isRequestAssigned) {
                        return false;
                    }

                    var total = 0;
                    angular.forEach($scope.scaffold.volumeDistribution, function (value) {
                        total += $scope.request.CapacityAnalysis[value.currentModel] || 0;
                    });
                    if (total === 100) {
                        $scope.isCurrentVolumeDistributionMaxed = true;
                    } else {
                        $scope.isCurrentVolumeDistributionMaxed = false;
                    }
                    return $scope.calculations._convertToFloat(total);
                },

                getProjectedVolumeDistributionTotal: function() {
                    if (!$scope.isRequestAssigned) {
                        return false;
                    }

                    var total = 0;
                    angular.forEach($scope.scaffold.volumeDistribution, function (value) {
                        total += $scope.request.CapacityAnalysis[value.projectedModel] || 0;
                    });
                    if (total === 100) {
                        $scope.isProjectedVolumeDistributionMaxed = true;
                    } else {
                        $scope.isProjectedVolumeDistributionMaxed = false;
                    }
                    return $scope.calculations._convertToFloat(total);
                },

                getAssetMonthlyDepreciation: function (asset) {

                    return asset.Life && $scope.calculations.getAssetBookValue(asset) !== 0 ? (asset.BookBasis || 0) / asset.Life : 0;
                },

                getAssetBookValue: function(asset) {
                    return Math.round(asset.BookBasis - asset.DeprLtd);
                },

                /**
                 * Formula:  SUM( forEachTest(monthly volumes / batch size * process time))
                 * @returns {}
                 */
                instrumentRunTimesCurrentTotal: function() {
                    if (!$scope.isRequestAssigned) {
                        return false;
                    }

                    var total = 0;
                    angular.forEach($scope.scaffold.instrumentRunTimes, function(value) {
                        total += $scope.request.CapacityAnalysis[value.currentModel] || 0;
                    });
                    return $scope.calculations._convertToFloat(total);
                },

                /**
                 * Formula:  SUM( forEachTest(monthly volumes / batch size * process time))
                 * @returns {}
                 */
                instrumentRunTimesProjectedTotal: function() {
                    if (!$scope.isRequestAssigned) {
                        return false;
                    }

                    var total = 0;
                    angular.forEach($scope.scaffold.instrumentRunTimes, function(value) {
                        total += $scope.request.CapacityAnalysis[value.projectedModel] || 0;
                    });
                    return $scope.calculations._convertToFloat(total);
                },

                runTimesCurrentTotal: function() {
                    if (!$scope.isRequestAssigned) {
                        return false;
                    }

                    var total = 0;
                    angular.forEach($scope.CachedLabTests, function(test) {
                        var temp = test.CurrentMonthlyVolume / test.CurrentBatchSize * test.CurrentProcessTime;
                        total += !isNaN(temp) ? temp : 0;
                    });
                    return $scope.calculations._convertToFloat(total);
                },

                runTimesProjectedTotal: function() {
                    if (!$scope.isRequestAssigned) {
                        return false;
                    }

                    var total = 0;
                    angular.forEach($scope.CachedLabTests, function(test) {
                        var temp = test.FutureMonthlyVolume / test.FutureBatchSize * test.FutureProcessTime;
                        total += !isNaN(temp) ? temp : 0;
                    });
                    return $scope.calculations._convertToFloat(total);
                },

                repeatCurrentTotal: function() {
                    if (!$scope.isRequestAssigned) {
                        return false;
                    }

                    var total = 0;
                    angular.forEach($scope.CachedLabTests, function(test) {
                        var runtime = test.CurrentMonthlyVolume / test.CurrentBatchSize * test.CurrentProcessTime;
                        var temp = runtime * test.CurrentRepeatRate / 100;
                        total += !isNaN(temp) ? temp : 0;
                    });
                    return $scope.calculations._convertToFloat(total);
                },

                repeatProjectedTotal: function() {
                    if (!$scope.isRequestAssigned) {
                        return false;
                    }

                    var total = 0;
                    angular.forEach($scope.CachedLabTests, function(test) {
                        var runtime = test.FutureMonthlyVolume / test.FutureBatchSize * test.FutureProcessTime;
                        var temp = runtime * test.FutureRepeatRate / 100;
                        total += !isNaN(temp) ? temp : 0;
                    });
                    return $scope.calculations._convertToFloat(total);
                },

                nonOperationalCurrentTotal: function() {
                    if (!$scope.isRequestAssigned) {
                        return false;
                    }

                    var rtn = (appConstants.LAB_HOURS_PER_MONTH * $scope.calculations.getNumInstruments('CURRENT')) -
                        ($scope.calculations.instrumentRunTimesCurrentTotal() / appConstants.DAYS_PER_WEEK * appConstants.DAYS_PER_MONTH * $scope.calculations.getNumInstruments('CURRENT'));
                    return appConstants.LAB_HOURS_PER_MONTH !== rtn ? $scope.calculations._convertToFloat(rtn) : 0;
                },

                nonOperationalProjectedTotal: function() {
                    if (!$scope.isRequestAssigned) {
                        return false;
                    }

                    var rtn = (appConstants.LAB_HOURS_PER_MONTH * $scope.calculations.getNumInstruments('PROJECTED')) -
                        ($scope.calculations.instrumentRunTimesProjectedTotal() / appConstants.DAYS_PER_WEEK * appConstants.DAYS_PER_MONTH * $scope.calculations.getNumInstruments('PROJECTED'));
                    return appConstants.LAB_HOURS_PER_MONTH !== rtn ? $scope.calculations._convertToFloat(rtn) : 0;
                },

                availableCapacityCurrentTotal: function() {
                    if (!$scope.isRequestAssigned) {
                        return false;
                    }

                    var rtn = (appConstants.LAB_HOURS_PER_MONTH * $scope.calculations.getNumInstruments('CURRENT')) -
                        $scope.calculations.nonOperationalCurrentTotal() - $scope.calculations.capacityIndicesCurrentTotal();
                    return $scope.calculations._convertToFloat(rtn);
                },

                availableCapacityProjectedTotal: function() {
                    if (!$scope.isRequestAssigned) {
                        return false;
                    }

                    var rtn = null;
                    if ($scope.request && $scope.request.CapacityAnalysis) {
                        rtn = (appConstants.LAB_HOURS_PER_MONTH * $scope.calculations.getNumInstruments('PROJECTED')) -
                            $scope.calculations.nonOperationalProjectedTotal() - $scope.calculations.capacityIndicesProjectedTotal();
                    }
                    return $scope.calculations._convertToFloat(rtn);
                },

                capacityIndicesCurrentTotal: function() {
                    if (!$scope.isRequestAssigned) {
                        return false;
                    }

                    var cap = $scope.request.CapacityAnalysis;
                    var total = $scope.calculations.runTimesCurrentTotal() + $scope.calculations.repeatCurrentTotal() + cap.CurrentMaintenanceCapacityIndex +
                        cap.CurrentDevelopmentCapacityIndex + cap.CurrentQcStandardsCapacityIndex + cap.CurrentOtherCapacityIndex;
                    return !isNaN(total) ? $scope.calculations._convertToFloat(total) : 0;
                },

                capacityIndicesProjectedTotal: function() {
                    if (!$scope.isRequestAssigned) {
                        return false;
                    }

                    var cap = $scope.request.CapacityAnalysis;
                    var total = $scope.calculations.runTimesProjectedTotal() + $scope.calculations.repeatProjectedTotal() + cap.FutureMaintenanceCapacityIndex +
                        cap.FutureDevelopmentCapacityIndex + cap.FutureQcStandardsCapacityIndex + cap.FutureOtherCapacityIndex;
                    return !isNaN(total) ? $scope.calculations._convertToFloat(total) : 0;
                },

                requiredTimeCurrent: function(volumeDistribution) {
                    if (!$scope.isRequestAssigned) {
                        return false;
                    }
                    // volume distribution comes in as a percentage so we need to convert to decimal for the calc
                    var vd = volumeDistribution / 100;
                    return $scope.calculations._convertToFloat($scope.calculations.capacityIndicesCurrentTotal() * vd / appConstants.AVG_WEEKS_PER_MONTH);
                },

                requiredTimeProjected: function(volumeDistribution) {
                    if (!$scope.isRequestAssigned) {
                        return false;
                    }
                    // volume distribution comes in as a percentage so we need to convert to decimal for the calc
                    var vd = volumeDistribution / 100;
                    return $scope.calculations._convertToFloat($scope.calculations.capacityIndicesProjectedTotal() * vd / appConstants.AVG_WEEKS_PER_MONTH);
                },

                getOriginalVolume: function(test) {
                    return Math.round(test.AnnualVolume / 12);
                },

                getNumInstruments: function(type) {
                    // value should never be 0
                    var rtn = 1;
                    if (type === 'CURRENT') {
                        rtn = $scope.request.CapacityAnalysis.CurrentInstruments || 1;
                    } else if (type === 'PROJECTED') {
                        rtn = $scope.request.CapacityAnalysis.FutureInstruments || 1;
                    }
                    return rtn;
                },

                /*
                 * CALCULATION SPECIFIC TO PROFITABILITY IMPACTS
                 */

                getCurrentExpensesTotal: function() {
                    if (!$scope.isRequestAssigned) {
                        return false;
                    }

                    var sum = 0;

                    for (var key in $scope.request.ProfitabilityImpact) {
                        if ($scope.request.ProfitabilityImpact.hasOwnProperty(key) && key.indexOf('CurrentExpense') > -1) {
                            sum += $scope.request.ProfitabilityImpact[key] || 0;
                        }
                    }

                    sum += $scope.calculations.getCurrentMonthlyExpensesDepreciation();

                    return sum;
                },

                getProjectedExpensesTotal: function() {
                    if (!$scope.isRequestAssigned) {
                        return false;
                    }

                    var sum = 0;

                    for (var key in $scope.request.ProfitabilityImpact) {
                        if ($scope.request.ProfitabilityImpact.hasOwnProperty(key) && key.indexOf('FutureExpense') > -1) {
                            sum += $scope.request.ProfitabilityImpact[key] || 0;
                        }
                    }

                    sum += $scope.calculations.getProjectedMonthlyExpensesDepreciation();

                    return sum;
                },

                getCurrentProjectedDiff: function(property) {
                    if (!$scope.isRequestAssigned) {
                        return false;
                    }

                    var current = 0;
                    var future = 0;

                    for (var key in $scope.request.ProfitabilityImpact) {
                        if ($scope.request.ProfitabilityImpact.hasOwnProperty(key) && key.indexOf(property) > -1) {
                            if (key.indexOf('CurrentExpense') > -1) {
                                current = $scope.request.ProfitabilityImpact[key] || 0;
                            } else if (key.indexOf('FutureExpense') > -1) {
                                future = $scope.request.ProfitabilityImpact[key] || 0;
                            }
                        }
                    }

                    return future - current;
                },

                getExpensesDiffTotal: function() {
                    if (!$scope.isRequestAssigned) {
                        return false;
                    }

                    var sum = 0;

                    for (var key in $scope.scaffold.expenseType) {
                        if ($scope.scaffold.expenseType.hasOwnProperty(key)) {
                            sum += $scope.scaffold.expenseType[key]();
                        }
                    }
                    sum += $scope.calculations.getProjectedMonthlyExpensesDepreciation() - $scope.calculations.getCurrentMonthlyExpensesDepreciation();
                    return sum;
                },

                getCurrentTestRevenue: function(test) {
                    if (!$scope.isRequestAssigned) {
                        return false;
                    }

                    var rtn = test.AnnualRevenue / test.AnnualVolume * (test.CurrentMonthlyVolume || 0);
                    return rtn * -1;
                },

                getProjectedTestRevenue: function(test) {
                    if (!$scope.isRequestAssigned) {
                        return false;
                    }

                    var rtn = test.AnnualRevenue / test.AnnualVolume * (test.FutureMonthlyVolume || 0);
                    return rtn * -1;
                },

                getTestRevenueDiff: function(test) {
                    if (!$scope.isRequestAssigned) {
                        return false;
                    }

                    var rtn = $scope.calculations.getProjectedTestRevenue(test) - $scope.calculations.getCurrentTestRevenue(test);
                    return rtn;
                },

                getRevenuesDiffTotal: function() {
                    if (!$scope.isRequestAssigned) {
                        return false;
                    }

                    var rtn = $scope.calculations.getRevenuesProjectedTotal() - $scope.calculations.getRevenuesCurrentTotal();
                    return rtn;
                },

                getRevenuesCurrentTotal: function() {
                    if (!$scope.isRequestAssigned) {
                        return false;
                    }

                    var total = 0;
                    angular.forEach($scope.CachedLabTests, function (test) {
                        if (test.AnnualRevenue && test.AnnualVolume) {
                            total += $scope.calculations.getCurrentTestRevenue(test);
                        }
                    });
                    return total;
                },

                getRevenuesProjectedTotal: function() {
                    if (!$scope.isRequestAssigned) {
                        return false;
                    }

                    var total = 0;
                    angular.forEach($scope.CachedLabTests, function (test) {
                        if (test.AnnualRevenue && test.AnnualVolume) {
                            total += $scope.calculations.getProjectedTestRevenue(test);
                        }
                    });
                    return total;
                },

                getCurrentMonthlyExpensesDepreciation: function() {
                    if (!$scope.isRequestAssigned) {
                        return false;
                    }

                    var total = 0;
                    angular.forEach($scope.CachedLabAssets, function(asset) {
                        total += asset.MonthlyDepreciation || 0;
                    });
                    return total;
                },

                getProjectedMonthlyExpensesDepreciation: function() {
                    if (!$scope.isRequestAssigned) {
                        return false;
                    }

                    var total = 0;
                    angular.forEach($scope.CachedLabAssets, function(asset) {
                        total += asset.MonthlyDepreciation || 0;
                    });
                    return $scope.calculations.getNewAssetMonthlyDepreciation();
                },

                getMonthlyExpensesDepreciationDiff: function() {
                    return $scope.calculations.getProjectedMonthlyExpensesDepreciation() - $scope.calculations.getCurrentMonthlyExpensesDepreciation();
                },

                getNewAssetMonthlyDepreciation: function() {
                    if (!$scope.isRequestAssigned) {
                        return false;
                    }

                    var rtn = $scope.request.PurchasePrice / $scope.request.Life;
                    return (!isNaN(rtn)) ? rtn : 0;
                },

                getDepreciationEndDate: function (asset) {
                    if (!$scope.isRequestAssigned) {
                        return false;
                    }

                    var temp = new Date(asset.InsrvDate);
                    // increment 5 years or so... roughly... depends on your defintion
                    if (asset.Life) {
                        temp.setDate(temp.getDate() + (appConstants.DAYS_PER_MONTH * asset.Life));
                    } else {
                        temp.setDate(temp.getDate() + (appConstants.DAYS_PER_MONTH * 60));
                    }
                    return temp;
                },

                /**
                 *  Sum(monthly volume * repeat rate %) /  Sum(monthly volumes)
                 *
                 * @returns {}
                 */
                getCurrentAverageRepeatRate: function () {
                    if (!$scope.isRequestAssigned) {
                        return false;
                    }

                    var sumPercentage = 0;
                    var sumMonthlyVolumes = 0;

                    angular.forEach($scope.CachedLabTests, function (test) {
                        sumPercentage += test.CurrentMonthlyVolume * test.CurrentRepeatRate / 100;
                        sumMonthlyVolumes += test.CurrentMonthlyVolume;
                    });

                    return (sumMonthlyVolumes !== 0) ? $scope.calculations._convertToFloat(sumPercentage / sumMonthlyVolumes * 100) : 0;
                },

                /**
                 *  Sum(monthly volume * repeat rate %) /  Sum(monthly volumes)
                 *
                 * @returns {}
                 */
                getProjectedAverageRepeatRate: function () {
                    if (!$scope.isRequestAssigned) {
                        return false;
                    }

                    var sumPercentage = 0;
                    var sumMonthlyVolumes = 0;

                    angular.forEach($scope.CachedLabTests, function (test) {
                        sumPercentage += test.FutureMonthlyVolume * test.FutureRepeatRate / 100;
                        sumMonthlyVolumes += test.FutureMonthlyVolume;
                    });

                    return (sumMonthlyVolumes !== 0) ? $scope.calculations._convertToFloat(sumPercentage / sumMonthlyVolumes * 100) : 0;
                },

                getCurrentCostPerTestDifferential: function() {
                    if (!$scope.isRequestAssigned) {
                        return false;
                    }

                    var sumMonthlyVolumes = 0;

                    angular.forEach($scope.CachedLabTests, function (test) {
                        sumMonthlyVolumes += test.CurrentMonthlyVolume ? test.CurrentMonthlyVolume : 0;
                    });

                    return $scope.scaffold.expenseTotals.DIFFERENCE() / sumMonthlyVolumes;
                },

                getProjectedCostPerTestDifferential: function() {
                    if (!$scope.isRequestAssigned) {
                        return false;
                    }

                    var sumMonthlyVolumes = 0;

                    angular.forEach($scope.CachedLabTests, function (test) {
                        sumMonthlyVolumes += test.FutureMonthlyVolume ? test.FutureMonthlyVolume : 0;
                    });

                    return $scope.scaffold.expenseTotals.DIFFERENCE() / sumMonthlyVolumes;
                }
            };

            $scope.isVotingEnabled = true;
            $scope.isVotingDefined = function () {
                if (!$scope.isRequestAssigned) {
                    return false;
                }

                return angular.isDefined($scope.request.Voting) && $scope.isVotingEnabled;
            };

            // ************************************************************************************
            // $WATCH DECLARATIONS
            // ************************************************************************************

            var isValidForm = function() {
                return !$scope.equipmentDetailsScope || !$scope.equipmentDetailsScope.requestForm || jQuery.isEmptyObject($scope.equipmentDetailsScope.requestForm.$error);
            };

            // debounce the 'update request' so we don't pummel the ReST api
            var persistRequestDebounced = debounce(apiService.updateRequest, 1000, false, isValidForm);
            var toastDebounced = debounce(appFnService.toast, 1000, false, null, true);

            var requestWatch = $scope.$watchCollection('request', function(newVal, oldVal) {

                // i know these if else statements could be combined but I really wanted to spell out exactly what is happening
                if (newVal === oldVal) {
                    // watch instantiation
                    // do nothing
                    var hi;
                } else if (!$scope.isRequestAssigned) {
                    // the initial load of the $scope.request variable
                    // do nothing
                    var hello;
                } else if ($scope.request && ($scope.request.State === appConstants.STATES.inProgress || $scope.request.State === appConstants.STATES.denied)) {

                    try {
                        if ($scope.equipmentDetailsScope && $scope.equipmentDetailsScope.requestForm && !jQuery.isEmptyObject($scope.equipmentDetailsScope.requestForm.$error)) {
                            // one of the required fields is empty
                            toastDebounced('Please ensure all required fields are filled in.', 'WARN');
                            mainApi.setMsg('');
                        } else {
                            var httppersist = persistRequestDebounced($scope.requestId, $scope.request);
                            httppersist.then(function(data) {
                                    // data saved... awesome sauce... do nothing...
                                    mainApi.setMsg('SAVED');
                                })
                                .catch(function(err) {
                                    // TODO: ERROR HANDLING FOR UNPERSISTED REQUEST
                                    mainApi.setMsg('ERROR');
                                });
                        }
                    } catch (e) {
                        // this will catch the state update from the summary tab
                        // at that point, the $scope.equipmentDetailsScope doesn't exist
                        $log.log(e);
                    }

                }
            });

            var expectedDateWatch = $scope.$watch('request.ExpectedInstallDate', function(newValue) {
                if ($scope.request && $scope.request.ExpectedInstallDate) {
                    $scope.request.ExpectedInstallDate = $filter('date')(newValue, 'mediumDate');
                }
            }, true);

            var requestAssignedWatch = $scope.$watch('isRequestAssigned', function (newVal, oldVal) {

                /**
                 * Once the request is assigned to the $scope this section will look for any list items
                 * that exist on the model but have been removed as available items.  E.g. If my request lists
                 * 'Nanoseconds' as the time unit for projected turn-around time and no longer support
                 * that time unit (removed it in the admin area), the list would continue to display 'Nanoseconds' but
                 * the text would be muted indicating it is no longer a valid option.
                 */

                if (newVal !== oldVal) {
                    var checkSite = function () {
                        var found = false;
                        angular.forEach($scope.Sites, function (site) {
                            if (site.Name === $scope.request.Site) {
                                found = true;
                            }
                        });
                        return found;
                    };

                    var checkStandardizationSite = function (model) {
                        var arr = $scope.request.Standardization[model].split(',');
                        var sitesArray = [];
                        angular.forEach($scope.Sites, function (site) {
                            sitesArray.push(site.Name);
                        });

                        angular.forEach(arr, function(selectedSite) {
                            if (sitesArray.indexOf(selectedSite) < 0) {
                                $scope.Sites.unshift({ Name: selectedSite, invalid: true });
                            }
                        });
                    };

                    var checkDepartment = function () {
                        return $q(function (resolve, reject) {
                            angular.forEach($scope.Departments, function (department) {
                                if (department.Name === $scope.request.Department) {
                                    resolve();
                                    return false;
                                }
                            });
                            reject();
                        });
                    };

                    var checkDivision = function () {
                        return $q(function (resolve, reject) {
                            angular.forEach($scope.Divisions, function (division) {
                                if (division.Name === $scope.request.Division) {
                                    resolve();
                                    return false;
                                }
                            });
                            reject();
                        });
                    };

                    var checkLabs = function () {
                        return $q(function (resolve, reject) {
                            angular.forEach($scope.Laboratories, function (lab) {
                                if (lab.Name === $scope.request.Laboratory) {
                                    resolve();
                                    return false;
                                }
                            });
                            reject();
                        });
                    };

                    var checkUnitsOfTime = function(model) {
                        var found = false;

                        angular.forEach($scope.lists.Unitsoftime, function (time) {
                            if (time.Name === $scope.request.OperationalEfficiency[model]) {
                                found = true;
                                return;
                            }
                        });

                        return found;
                    };

                    var checkTestVolumes = function () {
                        return $q(function (resolve, reject) {
                            angular.forEach($scope.lists.Monthlytestvolumes, function (item) {
                                if (item.Name === $scope.request.Criticality.ProjectedMonthlyTestVolumes) {
                                    resolve();
                                    return;
                                }
                            });
                            reject();
                        });
                    };

                    $timeout(function () {
                        if ($scope.request.Standardization.SitesThatPerformTheSameTest && $scope.Sites) {
                            checkStandardizationSite('SitesThatPerformTheSameTest');
                        }

                        if ($scope.request.Standardization.SitesThatPerformCommonTests && $scope.Sites) {
                            checkStandardizationSite('SitesThatPerformCommonTests');
                        }

                        if ($scope.request.Standardization.SitesThatPurchaseCommonReagents && $scope.Sites) {
                            checkStandardizationSite('SitesThatPurchaseCommonReagents');
                        }

                        if ($scope.request.OperationalEfficiency.FutureTurnAroundTimeUnits && $scope.lists) {
                            var futureFound = checkUnitsOfTime('FutureTurnAroundTimeUnits');

                            if (!futureFound) {
                                $scope.lists.Unitsoftime.unshift({ Name: $scope.request.OperationalEfficiency.FutureTurnAroundTimeUnits, invalid: true, SortOrder: 0 });
                            }
                        }

                        if ($scope.request.OperationalEfficiency.PublishedTurnAroundTimeUnits && $scope.lists) {
                            var publishedFound = checkUnitsOfTime('PublishedTurnAroundTimeUnits');

                            if (!publishedFound) {
                                $scope.lists.Unitsoftime.unshift({ Name: $scope.request.OperationalEfficiency.PublishedTurnAroundTimeUnits, invalid: true, SortOrder: 0 });
                            }
                        }

                        if ($scope.request.OperationalEfficiency.CurrentTurnAroundTimeUnits && $scope.lists) {
                            var currentFound = checkUnitsOfTime('CurrentTurnAroundTimeUnits');

                            if (!currentFound) {
                                $scope.lists.Unitsoftime.unshift({ Name: $scope.request.OperationalEfficiency.CurrentTurnAroundTimeUnits, invalid: true, SortOrder: 0 });
                            }
                        }

                        if ($scope.request.Criticality.ProjectedMonthlyTestVolumes && $scope.lists) {
                            checkTestVolumes().then(function () {

                            }).catch(function () {
                                $scope.lists.Monthlytestvolumes.unshift({ Name: $scope.request.Criticality.ProjectedMonthlyTestVolumes, invalid: true, SortOrder: 0 });
                            });
                        }


                        if ($scope.request.Site && $scope.Sites) {
                            var siteFound = checkSite();

                            if (!siteFound) {
                                // the current models 'site' has no longer exists
                                $scope.Sites.unshift({ Name: $scope.request.Site, invalid: true });
                            }
                        }

                        if ($scope.request.Department && $scope.Departments) {
                            checkDepartment().then(function () {
                                // do nothing 'cause the department is valid
                            }).catch(function () {
                                // the current models 'department' has no longer exists
                                $scope.Departments.unshift({ Name: $scope.request.Department, invalid: true });
                            });
                        }

                        if ($scope.request.Division && $scope.Divisions) {
                            checkDivision().then(function () {
                                // do nothing 'cause the division is valid
                            }).catch(function () {
                                // the current models 'division' has no longer exists
                                $scope.Divisions.unshift({ Name: $scope.request.Division, invalid: true });
                            });
                        }

                        if ($scope.request.Laboratory && $scope.Laboratories) {
                            checkLabs().then(function () {
                                // do nothing 'cause the lab is valid
                            }).catch(function () {
                                // the current models 'Laboratory' has no longer exists
                                $scope.Laboratories.unshift({ Name: $scope.request.Laboratory, invalid: true });
                            });
                        }
                    });
                }
            });

            $scope.getGraphData = function() {
                var rtn = {
                    currentVolumeData: [
                        { source: "Run time", percentage: $scope.calculations.runTimesCurrentTotal() },
                        { source: "Repeat", percentage: $scope.calculations.repeatCurrentTotal() },
                        { source: "Maintenance", percentage: ($scope.request.CapacityAnalysis.CurrentMaintenanceCapacityIndex || 0) },
                        { source: "Development", percentage: ($scope.request.CapacityAnalysis.CurrentDevelopmentCapacityIndex || 0) },
                        { source: "QC/Standards", percentage: ($scope.request.CapacityAnalysis.CurrentQcStandardsCapacityIndex || 0) },
                        { source: "Other", percentage: ($scope.request.CapacityAnalysis.CurrentOtherCapacityIndex || 0) },
                        { source: "Non-operational", percentage: $scope.calculations.nonOperationalCurrentTotal() },
                        { source: "Available capacity", percentage: $scope.calculations.availableCapacityCurrentTotal(), explode: true }
                    ],

                    projectedVolumeData: [
                        { source: "Run time", percentage: $scope.calculations.runTimesProjectedTotal() },
                        { source: "Repeat", percentage: $scope.calculations.repeatProjectedTotal() },
                        { source: "Maintenance", percentage: ($scope.request.CapacityAnalysis.FutureMaintenanceCapacityIndex || 0) },
                        { source: "Development", percentage: ($scope.request.CapacityAnalysis.FutureDevelopmentCapacityIndex || 0) },
                        { source: "QC/Standards", percentage: ($scope.request.CapacityAnalysis.FutureQcStandardsCapacityIndex || 0) },
                        { source: "Other", percentage: ($scope.request.CapacityAnalysis.FutureOtherCapacityIndex || 0) },
                        { source: "Non-operational", percentage: $scope.calculations.nonOperationalProjectedTotal() },
                        { source: "Available capacity", percentage: $scope.calculations.availableCapacityProjectedTotal(), explode: true }
                    ]
                };

                return rtn;
            };

            // ************************************************************************************
            // TEARDOWN
            // ************************************************************************************

            $scope.$on('$destroy', function() {
                // destroy watches
                requestWatch();
                expectedDateWatch();
                mainApi.setMsg('');
                requestAssignedWatch();
            });
        });

})(this, angular);