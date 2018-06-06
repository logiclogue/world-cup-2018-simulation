Array.prototype.flatten = function () {
    return [].concat.apply([], this);
};
