import TabSlider from '../common/TabSlider';
import BookCard from '../common/BookCard';
import Book1 from '../../assets/images/books/best-seller/book1.png'

const bookData = [
    { id: 1, title: "The Great Gatsby", price: 15.99, image: Book1 },
    { id: 2, title: "To Kill a Mockingbird", price: 12.99, discountedPrice: 10.99, image: Book1 },
    { id: 3, title: "1984", price: 11.99, image: Book1 },
    { id: 4, title: "Pride and Prejudice", price: 9.99, discountedPrice: 7.99, image: Book1 },
    { id: 5, title: "The Catcher in the Rye", price: 14.99, image: Book1 },
    { id: 6, title: "To the Lighthouse", price: 13.99, discountedPrice: 11.99, image: Book1 },
    { id: 7, title: "Brave New World", price: 12.99, image: Book1 },
    { id: 8, title: "The Hobbit", price: 16.99, discountedPrice: 14.99, image: Book1 },
];

const BestSeller = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Featured Books</h2>
            <TabSlider settings={settings}>
                {bookData.map(book => (
                    <div key={book.id} className="px-2">
                        <BookCard item={book} />
                    </div>
                ))}
            </TabSlider>
        </div>
    );
};

export default BestSeller;