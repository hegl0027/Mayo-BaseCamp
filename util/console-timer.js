import moment from 'moment';

export default class ConsoleTimer {
  constructor (taskName) {
    if (!taskName)
      throw new Error('ConsoleTimer requires a task name');

    this.taskName = taskName;
  }

  start() {
    this.startTime = moment();
    console.log(this.startTime.format('hh:mm:ss') + ' Starting ' + this.taskName);
    return this;
  }

  end() {
    this.endTime = moment();
    const diff = this.endTime.diff(this.startTime);
    console.log(this.endTime.format('hh:mm:ss') + ' Finished ' + this.taskName + ' after ' + diff + ' ms');
  }
}