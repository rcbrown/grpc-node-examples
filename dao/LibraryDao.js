module.exports = class LibraryDao {

    books = [
        {
            title: "The Sirens of Titan",
            author: "Kurt Vonnegut",
            checkoutStatus: "CHECKOUT_STATUS_OUT",
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
        return this.books.filter(book => book.title === title).shift();
    }
};