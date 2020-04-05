module.exports = class LibraryDao {

    books = [
        {
            title: "The Sirens of Titan",
            author: "Kurt Vonnegut",
            checkoutStatus: "CHECKOUT_STATUS_IN",
        },
        {
            title: "Snow Crash",
            author: "Neal Stephenson",
            checkoutStatus: "CHECKOUT_STATUS_IN",
        },
    ];

    getBooks() {
        return this.books;
    }

    checkoutBook(title) {
        const book = this.books.filter(book => book.title === title).shift();
        book.checkoutStatus = "CHECKOUT_STATUS_OUT";
        return book;
    }
};