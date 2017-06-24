axios.get('http://www.mocky.io/v2/55f748b33568195d044b3dc8')
.then((response) => {
const persons = response.data;
    persons.forEach((person) => {
      const fullName = `${person.name.first} ${person.name.last}`;
      const pictureUrl = person.picture;
      $('.all-persons').append(`<tr>
        <td><img src="${pictureUrl}"></td>
        <td>${fullName}</td>
        <td>${person.isActive}</td>
        <td>${person.about}</td>
        <td>${person.balance}</td>
        <td>${person.age}</td>
        <td>${person.registered}</td>
        <td>${person.company}</td>
        <td><a href="mailto:${person.email}">${person.email}</div></td>
        <td><a href="tel:${person.phone}">${person.phone}</a></td>
        <td>${person.address}</td>
        </tr>`);
    });
})
.catch((error) => {
console.log(error);
});

