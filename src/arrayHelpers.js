Array.prototype.flatten = function () {
    return [].concat.apply([], this);
};

Array.prototype.unique = function () {
    return this.filter((value, index, self) => self.indexOf(value) === index);
};
