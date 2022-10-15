class Posts {

    constructor() {
        // Deklaracja pola w klasie, które odpowiada adresowi pod ktorym sa dostepne zasoby postow
        this.url = 'https://jsonplaceholder.typicode.com/posts';
    }

    // zad (1)
    // pobranie listy wszystkich postow
    getAllPosts() {
        // przygotowanie opcji, ktore sa przekazywane do funkcji fetch w tym przypadku jest to ustawienie metody GET (mozna to pominac, fetch domyslnie ustawia te metode)
        const options = {
            // klucz method odopowiada za poinformowanie jakiej metody chcemy uzyc do zapytania
            method: 'GET'
        };

        // wywolanie funkcji fetch z parametrem URL oraz opcjami. Funkcja fetch zwraca obiekt Promise, ktory jest przypisywany do zmiennej fetchPromise.
        const fetchPromise = fetch(this.url, options);
        // W momeicie, dodajemy obsluge kiedy nasza Promise sie zakonczy -> w tym przypadku trzeba skorzystac w metody .then na obiekcie Promise co powoduje wywolanie metody przekazanej jako argument funkcji .then w momencie kiedy Promesa sie zakonczy. Nasza funkcja przekazana zwraca nowa Promise w tym przypadku ta Promise spowoduje zamiane obiektu Response na format JSON.
        return fetchPromise.then((response) => response.json());
    }

    deletePost(postId) {
        // Przygotowanie informacji dla funkcji fetch, ze chce wykonac zapytanie typu DELETE
        const options = {
            method: 'DELETE'
        };

        // Zgodnie z informacjami zamieszczonymi w dokumentacji API przygotowywuje odpowiedni adres URL, pod ktory powinno zostac wykonane zapytanie
        const url = `${this.url}/${postId}`;

        // Wywolanie funkcji fetch, ktora zwraca obiekt Promise i przypisuje go do zmiennej
        const fetchPromise = fetch(url, options);
        // W momencie obsluzenia zapytania przez przegladarke, zwracam kolejna Promise ktora obiecuje, ze przygotuje mi odpowiedz uzyskana z serwera w postaci JSON.
        return fetchPromise.then((response) => response.json());
    }
}

class Comments {

    constructor() {
        // ustawienie adresu URL jako pole w klasie
        this.url = 'https://jsonplaceholder.typicode.com/comments';
    }

    getAllComments() {
        // wywolanie funkcji fetch, ktora z podanego adresu URL pobiera zasób. Domyslnie metoda uzyta przez fetch to GET
        const fetchPromise = fetch(this.url);
        // wynikiem funkcji jest zwrocenie obiektu Promise, ktory w momencie rozwiazania bedzie mial wartosc odpowiedzi uzyskanej z serwera w postaci JSON
        return fetchPromise.then((response) => response.json())
    }

    deleteComment(commentId) {
        // przygotowanie informacji dla funkcji fetch o metodzie jaka ma byc uzyta do zapytania
        const options = {
            method: 'DELETE'
        };

        // przygotowanie adresu URL pod ktory ma zostac wyslane zapytanie
        const url = `${this.url}/${commentId}`;

        // wywolanie funkcji fetch na konkretnym adresie z opcjami, i zwrocenie Promesy ktora obiecuje przeksztalcic wynik uzyskany z serwera do postaci JSON.
        return fetch(url, options).then((response) => response.json());
    }
}

// Wywolanie konstruktora klasy Posts i stworzenie nowego obiektu
const posts = new Posts();
// Wywolanie metody getAllPosts ktora zwraca obiekt typu Promise. W momencie rozwiazanie tego Promise wywoluje funkcje (przekazana jako parametr), ktora wyswietli w konsoli przeksztalcona odpowiedz w formacie JSON.
posts.getAllPosts().then((json) => {
    console.log('JSON zawierajacy dane odnosnie postow w formacie JSON', json)
});
// Wywolanie metody deletePost z parametrem 5 oznacza, ze chce usunac post, ktorego ID = 5.
posts.deletePost(5).then(console.log);

// Wywolanie konstruktora klasy Comments i stworzenie nowego obiektu
const comments = new Comments();
// Wywolanie metody getAllPosts ktora zwraca obiekt typu Promise. W momencie rozwiazanie tego Promise wywoluje funkcje (przekazana jako parametr), ktora wyswietli w konsoli przeksztalcona odpowiedz w formacie JSON.
comments.getAllComments().then((json) => {
    console.log('JSON zawierajacy dane odnosnie komentarzy w formacie JSON', json);
});
// Wywolanie metody deleteComment z parametrem 2 oznacza, ze chce usunac komentarz ktorego ID = 2;
comments.deleteComment(2).then(console.log);