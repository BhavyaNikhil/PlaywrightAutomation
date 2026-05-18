module.exports = {
    default: {
        require: ['steps/*.js'], //where steps files exist
        format: ['progress'], //reporting format
        paths: ['features/*.feature'] //where feature files exist
    }
}