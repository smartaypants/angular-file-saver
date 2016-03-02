'use strict';

module.exports = function FileSaver(Blob, SaveAs, FileSaverUtils) {

  function save(blob, filename, disableAutoBOM, failureCallback) {
    try {
      SaveAs(blob, filename, disableAutoBOM, failureCallback);
    } catch(err) {
      FileSaverUtils.handleErrors(err.message);
    }
  }

  return {

    /**
    * saveAs
    * Immediately starts saving a file, returns undefined.
    *
    * @name saveAs
    * @function
    * @param {Blob} data A Blob instance
    * @param {Object} filename Custom filename (extension is optional)
    * @param {Boolean} disableAutoBOM Disable automatically provided Unicode
    * @param {function} failureCallback Callback function that is called when file cannot be saved (Safari)
    * text encoding hints
    *
    * @return {Undefined}
    */

    saveAs: function(data, filename, disableAutoBOM, failureCallback) {

      if (!FileSaverUtils.isBlobInstance(data)) {
        FileSaverUtils.handleErrors('Data argument should be a blob instance');
      }

      if (!FileSaverUtils.isString(filename)) {
        FileSaverUtils.handleErrors('Filename argument should be a string');
      }

      return save(data, filename, disableAutoBOM, failureCallback);
    }
  };
};
