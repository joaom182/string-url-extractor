function extractUrls(text) {
    var words = text
        .replace(/([\s\(\)\[\]<>"'])/g, "\0$1\0")
        .replace(/([?;:,.!]+)(?=(\0|$|\s))/g, "\0$1\0")
        .split("\0");

    var validUrls = [];

    words.forEach(function (word) {
        if (!word)
            return;

        var urlRegex = /(ftp: \/\/|www\.|https?:\/\/){1}[a-zA-Z0-9u00a1-\uffff0-]{2,}\.[a-zA-Z0-9u00a1-\uffff0-]{2,}(\S*)/g;
        if (urlRegex.test(word))
            return validUrls.push(word);

        var splited = word.split('.');
        var isValidUrl = (splited.length > 1 &&
            (splited[splited.length - 1].length >= 2 ||
                (splited.length > 2 &&
                    splited[splited.length - 1].length == 0)))

        if (isValidUrl)
            return validUrls.push(word);
    });

    return validUrls;
}

module.exports = extractUrls;