import moment from 'moment';
import util from 'gulp-util';

export default class ConsoleTimer {
  constructor (taskName) {
    if (!taskName)
      throw new Error('ConsoleTimer requires a task name');

    this.taskName = taskName;
  }

  start() {
    this.startTime = moment();
    util.log('Starting', util.colors.cyan(this.taskName));
    return this;
  }

  end() {
    this.endTime = moment();
    const diff = this.endTime.diff(this.startTime);
    util.log('Finished', util.colors.cyan(this.taskName), 'after', util.colors.magenta(diff), util.colors.magenta('ms'));
  }
}