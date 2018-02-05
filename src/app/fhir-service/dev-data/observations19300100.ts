export const observations19300100 = `{
  "resourceType": "Bundle",
    "id": "b12e0917-4005-42d9-a005-7a9f69ffb3d3",
    "meta": {
      "lastUpdated": "2018-02-02T10:40:30.831-06:00"
    },
    "type": "searchset",
    "total": 29,
    "entry": [
      {
        "resource": {
          "resourceType": "Observation",
          "id": "bda20edc-2374-4bd5-8f18-a01d03eb6eca",
          "status": "final",
          "category": {
            "coding": [
              {
                "system": "http://hl7.org/fhir/observation-category",
                "code": "vital-signs"
              }
            ]
          },
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "8302-2",
                "display": "Body Height"
              }
            ],
            "text": "Body Height"
          },
          "subject": {
            "reference": "Patient/19300100"
          },
          "encounter": {
            "reference": "urn:uuid:8d215a7d-ebd9-4956-8c14-23f567e7f81d"
          },
          "effectiveDateTime": "2009-07-21T13:28:08-05:00",
          "issued": "2009-07-21T13:28:08-05:00",
          "valueQuantity": {
            "value": 173.70296071212437,
            "unit": "cm",
            "system": "http://unitsofmeasure.org/",
            "code": "cm"
          }
        }
      },
      {
        "resource": {
          "resourceType": "Observation",
          "id": "776cfbdb-c6ae-48f4-8131-c30b94ee41bf",
          "status": "final",
          "category": {
            "coding": [
              {
                "system": "http://hl7.org/fhir/observation-category",
                "code": "vital-signs"
              }
            ]
          },
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "29463-7",
                "display": "Body Weight"
              }
            ],
            "text": "Body Weight"
          },
          "subject": {
            "reference": "Patient/19300100"
          },
          "encounter": {
            "reference": "urn:uuid:8d215a7d-ebd9-4956-8c14-23f567e7f81d"
          },
          "effectiveDateTime": "2009-07-21T13:28:08-05:00",
          "issued": "2009-07-21T13:28:08-05:00",
          "valueQuantity": {
            "value": 82.98902658269019,
            "unit": "kg",
            "system": "http://unitsofmeasure.org/",
            "code": "kg"
          }
        }
      },
      {
        "resource": {
          "resourceType": "Observation",
          "id": "d34a3596-8733-411f-85af-ec03ea832784",
          "status": "final",
          "category": {
            "coding": [
              {
                "system": "http://hl7.org/fhir/observation-category",
                "code": "vital-signs"
              }
            ]
          },
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "39156-5",
                "display": "Body Mass Index"
              }
            ],
            "text": "Body Mass Index"
          },
          "subject": {
            "reference": "Patient/19300100"
          },
          "encounter": {
            "reference": "urn:uuid:8d215a7d-ebd9-4956-8c14-23f567e7f81d"
          },
          "effectiveDateTime": "2009-07-21T13:28:08-05:00",
          "issued": "2009-07-21T13:28:08-05:00",
          "valueQuantity": {
            "value": 27.504656704111085,
            "unit": "kg/m2",
            "system": "http://unitsofmeasure.org/",
            "code": "kg/m2"
          }
        }
      },
      {
        "resource": {
          "resourceType": "Observation",
          "id": "3976de3b-4a8e-4a66-908c-0088b3fdef69",
          "status": "final",
          "category": {
            "coding": [
              {
                "system": "http://hl7.org/fhir/observation-category",
                "code": "vital-signs"
              }
            ]
          },
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "55284-4",
                "display": "Blood Pressure"
              }
            ]
          },
          "subject": {
            "reference": "Patient/19300100"
          },
          "encounter": {
            "reference": "urn:uuid:8d215a7d-ebd9-4956-8c14-23f567e7f81d"
          },
          "effectiveDateTime": "2009-07-21T13:28:08-05:00",
          "issued": "2009-07-21T13:28:08-05:00",
          "component": [
            {
              "code": {
                "coding": [
                  {
                    "system": "http://loinc.org",
                    "code": "8480-6",
                    "display": "Systolic Blood Pressure"
                  }
                ],
                "text": "Systolic Blood Pressure"
              },
              "valueQuantity": {
                "value": 139,
                "unit": "mmHg",
                "system": "http://unitsofmeasure.org/",
                "code": "mmHg"
              }
            },
            {
              "code": {
                "coding": [
                  {
                    "system": "http://loinc.org",
                    "code": "8462-4",
                    "display": "Diastolic Blood Pressure"
                  }
                ],
                "text": "Diastolic Blood Pressure"
              },
              "valueQuantity": {
                "value": 78,
                "unit": "mmHg",
                "system": "http://unitsofmeasure.org/",
                "code": "mmHg"
              }
            }
          ]
        }
      },
      {
        "resource": {
          "resourceType": "Observation",
          "id": "e0a3dde0-1fb1-4234-9664-9852312ec787",
          "status": "final",
          "category": {
            "coding": [
              {
                "system": "http://hl7.org/fhir/observation-category",
                "code": "laboratory"
              }
            ]
          },
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "2093-3",
                "display": "Total Cholesterol"
              }
            ],
            "text": "Total Cholesterol"
          },
          "subject": {
            "reference": "Patient/19300100"
          },
          "encounter": {
            "reference": "urn:uuid:8d215a7d-ebd9-4956-8c14-23f567e7f81d"
          },
          "effectiveDateTime": "2009-07-21T13:28:08-05:00",
          "issued": "2009-07-21T13:28:08-05:00",
          "valueQuantity": {
            "value": 173,
            "unit": "mg/dL",
            "system": "http://unitsofmeasure.org/",
            "code": "mg/dL"
          }
        }
      },
      {
        "resource": {
          "resourceType": "Observation",
          "id": "6305bb3d-bfad-4559-a579-0c7aa0dac4e9",
          "status": "final",
          "category": {
            "coding": [
              {
                "system": "http://hl7.org/fhir/observation-category",
                "code": "laboratory"
              }
            ]
          },
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "2571-8",
                "display": "Triglycerides"
              }
            ],
            "text": "Triglycerides"
          },
          "subject": {
            "reference": "Patient/19300100"
          },
          "encounter": {
            "reference": "urn:uuid:8d215a7d-ebd9-4956-8c14-23f567e7f81d"
          },
          "effectiveDateTime": "2009-07-21T13:28:08-05:00",
          "issued": "2009-07-21T13:28:08-05:00",
          "valueQuantity": {
            "value": 141,
            "unit": "mg/dL",
            "system": "http://unitsofmeasure.org/",
            "code": "mg/dL"
          }
        }
      },
      {
        "resource": {
          "resourceType": "Observation",
          "id": "1804a54a-9a59-4856-930d-ffb2e75b5dcf",
          "status": "final",
          "category": {
            "coding": [
              {
                "system": "http://hl7.org/fhir/observation-category",
                "code": "laboratory"
              }
            ]
          },
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "18262-6",
                "display": "Low Density Lipoprotein Cholesterol"
              }
            ],
            "text": "Low Density Lipoprotein Cholesterol"
          },
          "subject": {
            "reference": "Patient/19300100"
          },
          "encounter": {
            "reference": "urn:uuid:8d215a7d-ebd9-4956-8c14-23f567e7f81d"
          },
          "effectiveDateTime": "2009-07-21T13:28:08-05:00",
          "issued": "2009-07-21T13:28:08-05:00",
          "valueQuantity": {
            "value": 83,
            "unit": "mg/dL",
            "system": "http://unitsofmeasure.org/",
            "code": "mg/dL"
          }
        }
      },
      {
        "resource": {
          "resourceType": "Observation",
          "id": "c11a3daa-0898-4dbc-b574-31dcc6fbeece",
          "status": "final",
          "category": {
            "coding": [
              {
                "system": "http://hl7.org/fhir/observation-category",
                "code": "laboratory"
              }
            ]
          },
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "2085-9",
                "display": "High Density Lipoprotein Cholesterol"
              }
            ],
            "text": "High Density Lipoprotein Cholesterol"
          },
          "subject": {
            "reference": "Patient/19300100"
          },
          "encounter": {
            "reference": "urn:uuid:8d215a7d-ebd9-4956-8c14-23f567e7f81d"
          },
          "effectiveDateTime": "2009-07-21T13:28:08-05:00",
          "issued": "2009-07-21T13:28:08-05:00",
          "valueQuantity": {
            "value": 61,
            "unit": "mg/dL",
            "system": "http://unitsofmeasure.org/",
            "code": "mg/dL"
          }
        }
      },
      {
        "resource": {
          "resourceType": "Observation",
          "id": "c11a3daa-0898-4dbc-b574-31dcc6fbeece",
          "status": "final",
          "category": {
            "coding": [
              {
                "system": "http://hl7.org/fhir/observation-category",
                "code": "laboratory"
              }
            ]
          },
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "30522-7",
                "display": "C reactive protein"
              }
            ],
            "text": "C reactive protein"
          },
          "subject": {
            "reference": "Patient/19300100"
          },
          "encounter": {
            "reference": "urn:uuid:8d215a7d-ebd9-4956-8c14-23f567e7f81d"
          },
          "effectiveDateTime": "2009-07-21T13:28:08-05:00",
          "issued": "2009-07-21T13:28:08-05:00",
          "valueQuantity": {
            "value": 9.8,
            "unit": "mg/L",
            "system": "http://unitsofmeasure.org/",
            "code": "mg/L"
          }
        }
      },
      {
        "resource": {
          "resourceType": "Observation",
          "id": "61708b8b-61e7-4b7c-9949-bddb73aa01f9",
          "status": "final",
          "category": {
            "coding": [
              {
                "system": "http://hl7.org/fhir/observation-category",
                "code": "vital-signs"
              }
            ]
          },
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "8302-2",
                "display": "Body Height"
              }
            ],
            "text": "Body Height"
          },
          "subject": {
            "reference": "Patient/19300100"
          },
          "encounter": {
            "reference": "urn:uuid:846d8165-ea60-4130-bb90-259a0ec7d6db"
          },
          "effectiveDateTime": "2012-03-08T21:39:41-06:00",
          "issued": "2012-03-08T21:39:41-06:00",
          "valueQuantity": {
            "value": 173.70296071212437,
            "unit": "cm",
            "system": "http://unitsofmeasure.org/",
            "code": "cm"
          }
        }
      },
      {
        "resource": {
          "resourceType": "Observation",
          "id": "26775191-5899-4d65-a52d-36eb91d25a92",
          "status": "final",
          "category": {
            "coding": [
              {
                "system": "http://hl7.org/fhir/observation-category",
                "code": "vital-signs"
              }
            ]
          },
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "29463-7",
                "display": "Body Weight"
              }
            ],
            "text": "Body Weight"
          },
          "subject": {
            "reference": "Patient/19300100"
          },
          "encounter": {
            "reference": "urn:uuid:846d8165-ea60-4130-bb90-259a0ec7d6db"
          },
          "effectiveDateTime": "2012-03-08T21:39:41-06:00",
          "issued": "2012-03-08T21:39:41-06:00",
          "valueQuantity": {
            "value": 87.94664266397957,
            "unit": "kg",
            "system": "http://unitsofmeasure.org/",
            "code": "kg"
          }
        }
      },
      {
        "resource": {
          "resourceType": "Observation",
          "id": "d858a063-f183-49cf-9982-5317f4428d27",
          "status": "final",
          "category": {
            "coding": [
              {
                "system": "http://hl7.org/fhir/observation-category",
                "code": "vital-signs"
              }
            ]
          },
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "39156-5",
                "display": "Body Mass Index"
              }
            ],
            "text": "Body Mass Index"
          },
          "subject": {
            "reference": "Patient/19300100"
          },
          "encounter": {
            "reference": "urn:uuid:846d8165-ea60-4130-bb90-259a0ec7d6db"
          },
          "effectiveDateTime": "2012-03-08T21:39:41-06:00",
          "issued": "2012-03-08T21:39:41-06:00",
          "valueQuantity": {
            "value": 29.14773572312788,
            "unit": "kg/m2",
            "system": "http://unitsofmeasure.org/",
            "code": "kg/m2"
          }
        }
      },
      {
        "resource": {
          "resourceType": "Observation",
          "id": "1cb29586-d946-429a-81a9-b69d0dd2402c",
          "status": "final",
          "category": {
            "coding": [
              {
                "system": "http://hl7.org/fhir/observation-category",
                "code": "vital-signs"
              }
            ]
          },
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "55284-4",
                "display": "Blood Pressure"
              }
            ]
          },
          "subject": {
            "reference": "Patient/19300100"
          },
          "encounter": {
            "reference": "urn:uuid:846d8165-ea60-4130-bb90-259a0ec7d6db"
          },
          "effectiveDateTime": "2012-03-08T21:39:41-06:00",
          "issued": "2012-03-08T21:39:41-06:00",
          "component": [
            {
              "code": {
                "coding": [
                  {
                    "system": "http://loinc.org",
                    "code": "8480-6",
                    "display": "Systolic Blood Pressure"
                  }
                ],
                "text": "Systolic Blood Pressure"
              },
              "valueQuantity": {
                "value": 114,
                "unit": "mmHg",
                "system": "http://unitsofmeasure.org/",
                "code": "mmHg"
              }
            },
            {
              "code": {
                "coding": [
                  {
                    "system": "http://loinc.org",
                    "code": "8462-4",
                    "display": "Diastolic Blood Pressure"
                  }
                ],
                "text": "Diastolic Blood Pressure"
              },
              "valueQuantity": {
                "value": 70,
                "unit": "mmHg",
                "system": "http://unitsofmeasure.org/",
                "code": "mmHg"
              }
            }
          ]
        }
      },
      {
        "resource": {
          "resourceType": "Observation",
          "id": "9bfb4df2-cee7-4305-a12e-a37a87c51b6d",
          "status": "final",
          "category": {
            "coding": [
              {
                "system": "http://hl7.org/fhir/observation-category",
                "code": "vital-signs"
              }
            ]
          },
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "8302-2",
                "display": "Body Height"
              }
            ],
            "text": "Body Height"
          },
          "subject": {
            "reference": "Patient/19300100"
          },
          "encounter": {
            "reference": "urn:uuid:ffb0676a-c7e5-4893-94b0-58cc2537f525"
          },
          "effectiveDateTime": "2014-09-01T10:44:52-05:00",
          "issued": "2014-09-01T10:44:52-05:00",
          "valueQuantity": {
            "value": 173.70296071212437,
            "unit": "cm",
            "system": "http://unitsofmeasure.org/",
            "code": "cm"
          }
        }
      },
      {
        "resource": {
          "resourceType": "Observation",
          "id": "10f1b1bb-6a15-4727-b5cf-f9ee25b70146",
          "status": "final",
          "category": {
            "coding": [
              {
                "system": "http://hl7.org/fhir/observation-category",
                "code": "vital-signs"
              }
            ]
          },
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "29463-7",
                "display": "Body Weight"
              }
            ],
            "text": "Body Weight"
          },
          "subject": {
            "reference": "Patient/19300100"
          },
          "encounter": {
            "reference": "urn:uuid:ffb0676a-c7e5-4893-94b0-58cc2537f525"
          },
          "effectiveDateTime": "2014-09-01T10:44:52-05:00",
          "issued": "2014-09-01T10:44:52-05:00",
          "valueQuantity": {
            "value": 92.6786888001673,
            "unit": "kg",
            "system": "http://unitsofmeasure.org/",
            "code": "kg"
          }
        }
      },
      {
        "resource": {
          "resourceType": "Observation",
          "id": "0831091a-c2cb-4ff7-bbe7-a974dcd47d39",
          "status": "final",
          "category": {
            "coding": [
              {
                "system": "http://hl7.org/fhir/observation-category",
                "code": "vital-signs"
              }
            ]
          },
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "39156-5",
                "display": "Body Mass Index"
              }
            ],
            "text": "Body Mass Index"
          },
          "subject": {
            "reference": "Patient/19300100"
          },
          "encounter": {
            "reference": "urn:uuid:ffb0676a-c7e5-4893-94b0-58cc2537f525"
          },
          "effectiveDateTime": "2014-09-01T10:44:52-05:00",
          "issued": "2014-09-01T10:44:52-05:00",
          "valueQuantity": {
            "value": 30.716055172617672,
            "unit": "kg/m2",
            "system": "http://unitsofmeasure.org/",
            "code": "kg/m2"
          }
        }
      },
      {
        "resource": {
          "resourceType": "Observation",
          "id": "bb187fdf-cc57-4939-af66-e697536d5f7f",
          "status": "final",
          "category": {
            "coding": [
              {
                "system": "http://hl7.org/fhir/observation-category",
                "code": "vital-signs"
              }
            ]
          },
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "55284-4",
                "display": "Blood Pressure"
              }
            ]
          },
          "subject": {
            "reference": "Patient/19300100"
          },
          "encounter": {
            "reference": "urn:uuid:ffb0676a-c7e5-4893-94b0-58cc2537f525"
          },
          "effectiveDateTime": "2014-09-01T10:44:52-05:00",
          "issued": "2014-09-01T10:44:52-05:00",
          "component": [
            {
              "code": {
                "coding": [
                  {
                    "system": "http://loinc.org",
                    "code": "8480-6",
                    "display": "Systolic Blood Pressure"
                  }
                ],
                "text": "Systolic Blood Pressure"
              },
              "valueQuantity": {
                "value": 132,
                "unit": "mmHg",
                "system": "http://unitsofmeasure.org/",
                "code": "mmHg"
              }
            },
            {
              "code": {
                "coding": [
                  {
                    "system": "http://loinc.org",
                    "code": "8462-4",
                    "display": "Diastolic Blood Pressure"
                  }
                ],
                "text": "Diastolic Blood Pressure"
              },
              "valueQuantity": {
                "value": 80,
                "unit": "mmHg",
                "system": "http://unitsofmeasure.org/",
                "code": "mmHg"
              }
            }
          ]
        }
      },
      {
        "resource": {
          "resourceType": "Observation",
          "id": "f4a263ba-18b4-4aa7-8e8c-34cc3e8b730a",
          "status": "final",
          "category": {
            "coding": [
              {
                "system": "http://hl7.org/fhir/observation-category",
                "code": "laboratory"
              }
            ]
          },
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "2093-3",
                "display": "Total Cholesterol"
              }
            ],
            "text": "Total Cholesterol"
          },
          "subject": {
            "reference": "Patient/19300100"
          },
          "encounter": {
            "reference": "urn:uuid:ffb0676a-c7e5-4893-94b0-58cc2537f525"
          },
          "effectiveDateTime": "2014-09-01T10:44:52-05:00",
          "issued": "2014-09-01T10:44:52-05:00",
          "valueQuantity": {
            "value": 176,
            "unit": "mg/dL",
            "system": "http://unitsofmeasure.org/",
            "code": "mg/dL"
          }
        }
      },
      {
        "resource": {
          "resourceType": "Observation",
          "id": "4db5f82c-6ca3-41d7-a40f-e2d59e2d097b",
          "status": "final",
          "category": {
            "coding": [
              {
                "system": "http://hl7.org/fhir/observation-category",
                "code": "laboratory"
              }
            ]
          },
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "2571-8",
                "display": "Triglycerides"
              }
            ],
            "text": "Triglycerides"
          },
          "subject": {
            "reference": "Patient/19300100"
          },
          "encounter": {
            "reference": "urn:uuid:ffb0676a-c7e5-4893-94b0-58cc2537f525"
          },
          "effectiveDateTime": "2014-09-01T10:44:52-05:00",
          "issued": "2014-09-01T10:44:52-05:00",
          "valueQuantity": {
            "value": 135,
            "unit": "mg/dL",
            "system": "http://unitsofmeasure.org/",
            "code": "mg/dL"
          }
        }
      },
      {
        "resource": {
          "resourceType": "Observation",
          "id": "55a85c93-a214-4822-9b0e-0541e16bc086",
          "status": "final",
          "category": {
            "coding": [
              {
                "system": "http://hl7.org/fhir/observation-category",
                "code": "laboratory"
              }
            ]
          },
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "18262-6",
                "display": "Low Density Lipoprotein Cholesterol"
              }
            ],
            "text": "Low Density Lipoprotein Cholesterol"
          },
          "subject": {
            "reference": "Patient/19300100"
          },
          "encounter": {
            "reference": "urn:uuid:ffb0676a-c7e5-4893-94b0-58cc2537f525"
          },
          "effectiveDateTime": "2014-09-01T10:44:52-05:00",
          "issued": "2014-09-01T10:44:52-05:00",
          "valueQuantity": {
            "value": 74,
            "unit": "mg/dL",
            "system": "http://unitsofmeasure.org/",
            "code": "mg/dL"
          }
        }
      },
      {
        "resource": {
          "resourceType": "Observation",
          "id": "6be5fc0e-4224-4d96-b624-2e44e0f48ca7",
          "status": "final",
          "category": {
            "coding": [
              {
                "system": "http://hl7.org/fhir/observation-category",
                "code": "laboratory"
              }
            ]
          },
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "2085-9",
                "display": "High Density Lipoprotein Cholesterol"
              }
            ],
            "text": "High Density Lipoprotein Cholesterol"
          },
          "subject": {
            "reference": "Patient/19300100"
          },
          "encounter": {
            "reference": "urn:uuid:ffb0676a-c7e5-4893-94b0-58cc2537f525"
          },
          "effectiveDateTime": "2014-09-01T10:44:52-05:00",
          "issued": "2014-09-01T10:44:52-05:00",
          "valueQuantity": {
            "value": 75,
            "unit": "mg/dL",
            "system": "http://unitsofmeasure.org/",
            "code": "mg/dL"
          }
        }
      },
      {
        "resource": {
          "resourceType": "Observation",
          "id": "f02e2537-2f9c-48ba-9886-98bdf8c08096",
          "status": "final",
          "category": {
            "coding": [
              {
                "system": "http://hl7.org/fhir/observation-category",
                "code": "vital-signs"
              }
            ]
          },
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "8331-1",
                "display": "Oral temperature"
              }
            ],
            "text": "Oral temperature"
          },
          "subject": {
            "reference": "Patient/19300100"
          },
          "encounter": {
            "reference": "urn:uuid:b2203eff-5cc5-4cdf-9d22-42b1f404cbe3"
          },
          "effectiveDateTime": "2015-02-08T01:00:54-06:00",
          "issued": "2015-02-08T01:00:54-06:00",
          "valueQuantity": {
            "value": 37,
            "unit": "Cel",
            "system": "http://unitsofmeasure.org/",
            "code": "Cel"
          }
        }
      },
      {
        "resource": {
          "resourceType": "Observation",
          "id": "8b1fc542-2a3b-41f5-9c8c-4d6ebc3b8682",
          "status": "final",
          "category": {
            "coding": [
              {
                "system": "http://hl7.org/fhir/observation-category",
                "code": "vital-signs"
              }
            ]
          },
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "8302-2",
                "display": "Body Height"
              }
            ],
            "text": "Body Height"
          },
          "subject": {
            "reference": "Patient/19300100"
          },
          "encounter": {
            "reference": "urn:uuid:8e6d2b56-e6dc-4793-aa5f-0401cf3ee437"
          },
          "effectiveDateTime": "2016-12-24T22:59:58-06:00",
          "issued": "2016-12-24T22:59:58-06:00",
          "valueQuantity": {
            "value": 173.70296071212437,
            "unit": "cm",
            "system": "http://unitsofmeasure.org/",
            "code": "cm"
          }
        }
      },
      {
        "resource": {
          "resourceType": "Observation",
          "id": "8b1fc542-2a3b-41f5-9c8c-4d6ebc3b8683",
          "status": "final",
          "category": {
            "coding": [
              {
                "system": "http://hl7.org/fhir/observation-category",
                "code": "social-history"
              }
            ]
          },
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "72166-2",
                "display": "Tobacco smoking status NHIS"
              }
            ],
            "text": "Tobacco smoking status NHIS"
          },
          "subject": {
            "reference": "Patient/19300100"
          },
          "encounter": {
            "reference": "urn:uuid:8e6d2b56-e6dc-4793-aa5f-0401cf3ee437"
          },
          "effectiveDateTime": "2016-12-24T22:59:58-06:00",
          "issued": "2016-12-24T22:59:58-06:00",
          "valueCodeableConcept": {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "266919005",
                "display": "Never smoker"
              }
            ],
            "text": "Never Smoker"
          }
        }
      },
      {
        "resource": {
          "resourceType": "Observation",
          "id": "a6182f80-4fa7-49e7-b195-f29a185c01e1",
          "status": "final",
          "category": {
            "coding": [
              {
                "system": "http://hl7.org/fhir/observation-category",
                "code": "vital-signs"
              }
            ]
          },
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "29463-7",
                "display": "Body Weight"
              }
            ],
            "text": "Body Weight"
          },
          "subject": {
            "reference": "Patient/19300100"
          },
          "encounter": {
            "reference": "urn:uuid:8e6d2b56-e6dc-4793-aa5f-0401cf3ee437"
          },
          "effectiveDateTime": "2016-12-24T22:59:58-06:00",
          "issued": "2016-12-24T22:59:58-06:00",
          "valueQuantity": {
            "value": 95.46633764991935,
            "unit": "kg",
            "system": "http://unitsofmeasure.org/",
            "code": "kg"
          }
        }
      },
      {
        "resource": {
          "resourceType": "Observation",
          "id": "d2ab1cec-3128-4557-a31f-e8e96c41c75d",
          "status": "final",
          "category": {
            "coding": [
              {
                "system": "http://hl7.org/fhir/observation-category",
                "code": "vital-signs"
              }
            ]
          },
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "39156-5",
                "display": "Body Mass Index"
              }
            ],
            "text": "Body Mass Index"
          },
          "subject": {
            "reference": "Patient/19300100"
          },
          "encounter": {
            "reference": "urn:uuid:8e6d2b56-e6dc-4793-aa5f-0401cf3ee437"
          },
          "effectiveDateTime": "2016-12-24T22:59:58-06:00",
          "issued": "2016-12-24T22:59:58-06:00",
          "valueQuantity": {
            "value": 31.63995231638816,
            "unit": "kg/m2",
            "system": "http://unitsofmeasure.org/",
            "code": "kg/m2"
          }
        }
      },
      {
        "resource": {
          "resourceType": "Observation",
          "id": "dcdbe3a4-b3cb-40fe-8a41-f77a7b5fce55",
          "status": "final",
          "category": {
            "coding": [
              {
                "system": "http://hl7.org/fhir/observation-category",
                "code": "vital-signs"
              }
            ]
          },
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "55284-4",
                "display": "Blood Pressure"
              }
            ]
          },
          "subject": {
            "reference": "Patient/19300100"
          },
          "encounter": {
            "reference": "urn:uuid:8e6d2b56-e6dc-4793-aa5f-0401cf3ee437"
          },
          "effectiveDateTime": "2016-12-24T22:59:58-06:00",
          "issued": "2016-12-24T22:59:58-06:00",
          "component": [
            {
              "code": {
                "coding": [
                  {
                    "system": "http://loinc.org",
                    "code": "8480-6",
                    "display": "Systolic Blood Pressure"
                  }
                ],
                "text": "Systolic Blood Pressure"
              },
              "valueQuantity": {
                "value": 100,
                "unit": "mmHg",
                "system": "http://unitsofmeasure.org/",
                "code": "mmHg"
              }
            },
            {
              "code": {
                "coding": [
                  {
                    "system": "http://loinc.org",
                    "code": "8462-4",
                    "display": "Diastolic Blood Pressure"
                  }
                ],
                "text": "Diastolic Blood Pressure"
              },
              "valueQuantity": {
                "value": 70,
                "unit": "mmHg",
                "system": "http://unitsofmeasure.org/",
                "code": "mmHg"
              }
            }
          ]
        }
      },
      {
        "resource": {
          "resourceType": "Observation",
          "id": "8299b133-739d-4a12-b005-06743d3b7c04",
          "status": "final",
          "category": {
            "coding": [
              {
                "system": "http://hl7.org/fhir/observation-category",
                "code": "survey"
              }
            ]
          },
          "code": {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "273724008",
                "display": "Quality adjusted life years"
              }
            ],
            "text": "Quality adjusted life years"
          },
          "subject": {
            "reference": "Patient/19300100"
          },
          "effectiveDateTime": "2017-08-09T10:14:43-05:00",
          "issued": "2017-08-09T10:14:43-05:00",
          "valueQuantity": {
            "value": 42,
            "unit": "years",
            "system": "http://unitsofmeasure.org/",
            "code": "years"
          }
        }
      },
      {
        "resource": {
          "resourceType": "Observation",
          "id": "af5929c4-bda3-4321-ae51-61c0422a5508",
          "status": "final",
          "category": {
            "coding": [
              {
                "system": "http://hl7.org/fhir/observation-category",
                "code": "survey"
              }
            ]
          },
          "code": {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "273421001",
                "display": "Disability rating scale"
              }
            ],
            "text": "Disability rating scale"
          },
          "subject": {
            "reference": "Patient/19300100"
          },
          "effectiveDateTime": "2017-08-09T10:14:43-05:00",
          "issued": "2017-08-09T10:14:43-05:00",
          "valueQuantity": {
            "value": 0,
            "unit": "years",
            "system": "http://unitsofmeasure.org/",
            "code": "years"
          }
        }
      }
    ]
}`
