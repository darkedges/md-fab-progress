export class MdFABProgress {
  fab: Fab = new Fab();
  progress: Progress = new Progress();
}

export class Fab {
  color: String  = 'accent';
  icon: String = '';
  iconDone: String = '';
}

export class Progress {
  color: String  = 'primary';
  value = 0;
  mode: String = 'determinate';
}
