//Array of books//
const books = [
    {
        name: "Book A",
        author: "Moulvi Abdul Aziz",
        price: "£7.99",
        description: "20 Hadiths for kids",
        image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBEQACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQADBgIBB//EAD0QAAIBAwEFBAcFBQkAAAAAAAECAwAEEQUSEyExUQYUQYEiMjRhcZGxM0Jyc8EjVIKSoQcVJDVSU2Oy4f/EABoBAAEFAQAAAAAAAAAAAAAAAAABAgMEBQb/xAA2EQABBAAEAwQKAgEFAQAAAAABAAIDEQQSITEFQXETUWGBIjIzUpGhscHh8BQ00SMkQkPxFf/aAAwDAQACEQMRAD8A+40IWY1a8uY9TmjjuJFQYwA3AcBWBjsTKydzWuIH4Wlh4mOjBIQwvL1jhLidj0DE1TGJxLjTXElSmOIbgK7a1IJtmWcLjPr+FTlvEQzOSa33+26ivD3l0VffLvOO8y5/Gaqfy8R75UnZR+6rTNciLb782cZ2ds5qyXzCLP2+vdZv/wBUNMzVkVXe7v8AeZf5zVX+XiPfPxUvZx+6FbbvfT52btwBwOXNXMI3GYqy2SgPFRSGGPdq5nbUYQWeeXZH3hIcUYhnEIAXOcaHO0sboHmgPkh++3n71N/OapfzMR75+Kn7KP3QtB2flkmsmaV2dt4RljnwFb/C5HyQkvNm/wDCoYpoa+gEzrSVZShCyOt4GqzDxOP+ormOJA/yHHp9FrYb2QVMEskLbUbYJGKqQTyQOzRminSMa8U5dvdTyfsy7yFvuj/ypjPi8R6BcTfJRiKNvpVSpnZLdgL27tLQtyWWQBsVZZwuT/scG/v7zTmuL/ZtLugRUNibiISwX0ciNyZACD5g1aHBgRef5flQuxOQ5XMooa8Edk4jn1G0jkPJJnCE1BJwgt2ePPT/ACpInulFtjJHhqoxkiC71dlTxV1IIPmKoTYaeCsw07/ynNLH+qVZLPLKoDuWXpTJsVPMMsjiQkZGxhsBDkVUU1rSdm/YX/NP0FdPwb+uep+yzsX7TyTatZVVKELKawM6nN0yOPkK5jiOuKcD4fRaeHP+kELPiJWKNtAcjiqj2Na/K02O9SMJduE2sLRbaIZGZD6zdTXWYPCtgjA581mzymR3gspN2Z06zmvtQ7R3hkieUmL9oQzePHHEt4YHT38EMDG26QrWbxHEShkOFbRA5V99AED2MuJbKLW76BH7jDCzqH8XHFR0zs8/iKjw5LQ5w2VrirWyvhiJ9MkA+f52XvZHQbbXoLy+1ZpZZGmKAhypzgEtw58/Hhw5UuHhEoLnpvE8bJhHshg0ACN7BTuH1HR523kcDExg+HEhvLOD5mlw9ODonahRcYYKjxLdC4a/AEJtJF3a6aHmmNpfh0rncbhxh58u438lVY/tGZua5l2S52Bsr4CqUxYXksFBSMsDVaHs57C35h+grouDf1z1P2VDF+0TWtZVlKELK6z/AJlOPeOP8IrmOJH/AHDh0+i08P7MIKZS8RA5jiKot3UoNFObO7S4txIDyHpAeBrscJiWzxhw35rLmiMbqXyubWrfVNUa+1kTTw847eOQKFHgufAfDBPWqRlD3Zn6rrxhHwQiHDkNPM8z+/ILYaJqkOv980uzsja6cLMx8ABsOxI8OoOf4auRvEtsAoUsLFYZ2CLJXuuTNfl5+KQ6Jr0/ZVbzTry0LyiTbUbezhsAeanAIxVeOZ0FscFqYrBM4iWzRu0qj+96a/2e2kyi71W5yFnGyjEY2+OWb4Zxx+NS4ZuUGRyocYnY4sgj1y/tJxLJ3q8eVPURdkHrXP46X+RMXM2H0HNV429mwNO5VLplw+eXhWcTQpTB1ClpOznsL/mH6Cuj4N/XPU/ZZ+K9dNa1lWUoQsnrYzqc4Pu+grl+JGsU7y+i08P7IIYAllIbgPDrVIEKQ7LrdOJN5byGOT+hqeKV8bszDRTCQRThYXcU0sUe7fT4XT/jAAPlWrHxOUCnNB+ShdBGTYdXVWxX6QpsRWEsS89lIsCrA4qK9mfkmHDXrnC5nuTc42tMEpX1TMo4fMVG/ijj6sfxKUYdrd3/AAVcoubn2lwsf+2n61nYjFSzaPOncNlKwRs9QaqbIVQFGAKoOT7tUt76jKkC0XZv2F/zD9BXR8H/AK56n7KhivXTWtZVlKELO6pYSTahLIroAccDnoKycVwySeUyBwFq3FiWsZlIWbgjhM+nC6uSHlu50Mewzb0B9gDOfRA/WnQ4eJoja6rsjbfWlde5xa8tGgDT00v5oCBZlSS7uLtCLa3jVFuZXERdmYZYLxOADw8eFaWAwsbYQC0EknkLrzWDxN7hinvDqDQKBJAs9E10uJoLu6hEzzW4cyRK7luBiDAZPEjj/SoMbAwzRuDRsdK3ItSYC2tkbmJ1FWb0Nd6p1yaaLRZriCV4meHJ2WIwdsDh0zmqGFiEkkclVYJI5aGtOqm4k8x4aTKdRVHqk3eLiO87PJHPMN9CjyEyE7ZZ2Bz14DFa0sDHsLQBqsKOaRskPpHUa67pmL+T+5d9uoy5l3W2xYt6hJOc881vHAQdvkyiqvYd/RZw4lMMF2nO63Pu3d3vfwQszKFM17fvEw1SONRu2k3iiJDu8AjAJYk1ThwUTBkEYOjjy94669woLf7d7mhxcdx9AnejWMskFyu+2lju5o02ySQocgDNc/xPhJmnzxU0EDTxrXZaOGxIYynWdT9VqtEga3tGRiDlyeHwFSYHCuw0ZY43raSaQSOsJjVxRKUIS279ofyqRuyRLm0yzaVJTDh42Z0Kuw2WbmRg8M0wwsJulMJ5AC29D9lXc6Tp0lsySWqmMIAUDEBguSAcHjjJ+dStJYKbyVeWNsxJkF2s+dWkt9Ojv+6IplXejZjkbB9RQ0m1zIGPhWdJiS6Nsrh4jfTzWrHgY2yuiaeeuo18vBS71VJ3uBcw2kVm2xAHuA8pdmUNjgRgDmT4cOtaEeHjIEgHpEfJYOJxLg98L6yA1tufJUi6gtbe1ll0qEXltctbIplYrGwP3ck4HHNNk0lDGnTKXXV7VpQrXVOw0THRh726tOUfp2THQjZ6pFLG9jHHGHLbKOxRiDjaHHiOhp4xuIGIyOdrlBuqIvkQbopx4fhex0Zpe3KxzCaz6Pp87BpbVSRKsowzKA4AAbAPPAAz7qkE0g2Ph5KTs29yKt4IrePdwIEUsWI6knJJPiSTTHOLtSnAAbJpYfYn8VRO3TkTTUKUIS279ofy+lSN2SKmnIQd7qFjbFobq8hhdkzsu4BC8s46UFMdKxhpxCydzo4urG1A1ayEFsu5D7ZwxyW4jwODyrO/+fNM1rGG6C1BxjCwl0juZ7x3bIuTTbOXfxy3Njc2yET4llaNoyEVWJI5rhRWy1ksbWiiOXVc88wYiV/pA2c1XqNFVPBp96IobnWLJriW6M4QEBXJIwoB5jgBUD4pi4yRDZpb0utbHMUrkRa1uWQ7m/wmGjpY6Q9yr6jAyqxygbhDk52fcM+FV2QyGQSv9bKASOdcz4q+YJSwNYw0TY8+5P45EljWSJ1dGGVZTkEe41MVVc0tJa4UQvaE1MbD7E/iNMdunImmoUoQll57Q/l9KkbskVNOtIsR2klhg1rUHulyndoW2NrG2ATkD3cKoYxsj3Rhmhs61daFV88bHymTUZRpdXrsgHRxb3sm83yNdgrKOIOU4Dy5VscBILaqtNuhWJxtjg1xuwXXfVv6ETrmLifWWhO+U2rkFPS4bI6VpM9GCMHQ2PqkjIfxKRzTYo+PIIG/mSe7ug95DcJLdWxsY45hIwIKhsKCSoxnNcxwqNzDBkjLXAP7QlpaCDeWyRqbqt10c5Bz2bsjLrfVNIHH+Ignult4lnmLulzupIiSR6SH1wQBjh4mtA8jXcukePVexuY02hlsHof+JHNaPs6d3oNlvPR/Zjnw5nh+lRyEAklZOP8ASxT670w3i73dcdrZ2vVOMZxz5U21TrS000/7A/iNNdulRNNQpQhLLz2h/L6VINkioJABJ4Ac6VCqhliuE2k9IA44jkaYx7Xi2pzmFhortgwUBAvPkeVOTRXNVSTGBQZDDHk4GWOPpSE1ul0XaGQ7JxHg8yCaVGi7PlSpFXNCk67MmSM54Ux7A8UU5jyw2F6FKlQpARRjZApMpBFHQcklg3e6aaf9gfxGlduhFU1ClCErvPaX8vpUg2SIWRWUO8IUylfRDn0c+FNyAOLxulu9Dsuo0WNcIip7lGBTg0N2CC4u3K6pU1CX9obsIBKUCsG9UHJFNLb1QiUXZRVJyQMZ60oFCkq9pUi8oQvaEJjp32B/Ef0pjt05FU1ClCENLapJIWJbJ6UtpF53KP8A1P8AOlzFKve5RdX+dGYoU7lF1b50Zihedxi6v86MxQve4xdW+dGYoXncYurfOjMUKdxh6t86MxQp3GHq3zozFCuhiWFdlM4znjTSbQrKEL//2Q=="
    },

    {
        name: "Book B",
        author: "Ibn Hajar al-Asqalani",
        price: "£15.00",
        description: "Bulugh-al-Maram",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD5C3HOK-XSbFuYbICiPIqit81FXlCHeetZ6O_6ALR3GgLC0VkJkkVCExV&s"

    },

    {
        name: "Book C",
        author: "Sa'id bin Ali bin Wahf Al-Qahtani",
        price: "£15.00",
        description: "Hisnul-Muslim",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLHHOD7RjfHwpy-K9f9r0xKod4CCLmfmKuBmk7KegtMhBakckKTIRS&usqp=CAE&s"
    },
    {
        name: "Book D",
        author: "Darussalam",
        price: "£5.00",
        description: "My wudhu book",
        image: "data:image/jpeg;base64,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"

    }
]
//function to show books//
function showBooks() {
    const BeneficialBooks = document.getElementById('Beneficial Books');

    //loop through the array of books//
    for (const eachBook of books) {
        const bookDiv = document.createElement('div');
        //bookDiv.classList.add(eachBook);
        //create html element for the books//
        const bookTitle = document.createElement('h3');
        bookTitle.textContent = eachBook.name;

        const authorTitle = document.createElement('p');
        authorTitle.textContent = eachBook.author;

        const priceTitle = document.createElement('p');
        priceTitle.textContent = eachBook.price;

        const descriptionTitle = document.createElement('p');
        descriptionTitle.textContent = eachBook.description;

        const imageTitle = document.createElement('img');
        imageTitle.textContent = eachBook.image;

        //append element to book
        bookDiv.appendChild(bookTitle);
        bookDiv.appendChild(authorTitle);
        bookDiv.appendChild(priceTitle);
        bookDiv.appendChild(descriptionTitle);
        bookDiv.appendChild(imageTitle);
        //append bookDiv to Beneficial Books//
        BeneficialBooks.appendChild(bookDiv);
    }
}

//call the function to show books//
showBooks();















