NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for (var i = this.length - 1; i >= 0; i--)
        if (this[i] && this[i].parentElement) this[i].parentElement.removeChild(this[i]);
}

document.querySelectorAll('div.col-1-3.last, .homepage-feature-container, .blog-promo, .homepage-sparklife-container-outer').remove();
