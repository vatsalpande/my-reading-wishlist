import fetchUrl from "../shared/fetchUrl/fetchUrl";

export async function getBooksByType(type: string) {
    try {
        const allBooks = await fetchUrl(`https://www.googleapis.com/books/v1/volumes?q=${type}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            }
        });
        console.info({allBooks});
        return allBooks;
        // return allBooks.items.map(item => {
        //                 return {
        //                     id: item.id,
        //                     title: item.volumeInfo?.title,
        //                     authors: item.volumeInfo?.authors || [],
        //                     description: item.searchInfo?.textSnippet,
        //                     publisher: item.volumeInfo?.publisher,
        //                     publishedDate: item.volumeInfo?.publishedDate
        //                         ? new Date(item.volumeInfo?.publishedDate).toISOString()
        //                         : undefined,
        //                     coverUrl: item.volumeInfo?.imageLinks?.thumbnail
        //                 };
        //             });
    } catch(exception) {

    }
    return
}

