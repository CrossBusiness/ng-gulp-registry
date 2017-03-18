import del from 'del';

function clean() {
  console.log(this.temp);
  return del([this.temp, this.dest]).then(paths => {
    console.info('Deleted files and folders:\n\t',paths.join('\n\t'));
  });
}

//clean.displayName = 'clean';
clean.description = 'cleaning task';

export default clean

