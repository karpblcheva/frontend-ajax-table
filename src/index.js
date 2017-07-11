axios.get('http://www.mocky.io/v2/55f748b33568195d044b3dc8')
  .then((response) => {
    const persons = response.data;

    function renderTableBody(persons, tbody) {
      persons.forEach(
        (person) => {
          const fullName = `${person.name.first} ${person.name.last}`;
          const pictureUrl = person.picture;
          const isActive = person.isActive;
          const age = person.age;

          function showData(tbody) {
            return tbody.append(`<tr>
            <td><img src="${pictureUrl}"></td>
            <td>${fullName}</td>
            <td>${isActive}</td>
            <td>${person.about}</td>
            <td>${person.balance}</td>
            <td>${age}</td>
            <td>${person.registered}</td>
            <td>${person.company}</td>
            <td><a href="mailto:${person.email}">${person.email}</div></td>
            <td><a href="tel:${person.phone}">${person.phone}</a></td>
            <td>${person.address}</td>
            </tr>`);
          }

          showData(tbody);
        }
      );
    };

    renderTableBody(persons, $('.all-persons'));

    let activePersons = persons.filter(function (a) {
      return a.isActive === true;      
    })
    renderTableBody(activePersons, $('.active-persons'));

    persons.sort(function (a, b) {
      return a.age - b.age;
    })
    renderTableBody(persons, $('.sortByAge-persons'));

    persons.sort(function (a, b) {
      if (a.name.first < b.name.first) {
        return -1;
      }
      if (a.name.first > b.name.first) {
        return 1;
      }
      return 0;
    })
    renderTableBody(persons, $('.sortByName-persons'));

    let filteredPersons = persons.filter(function (a) {
      return a.name.last.length >= 6;      
    })
    renderTableBody(filteredPersons, $('.filterByLastName-persons'));

  })
  .catch((error) => {
    console.log(error);
  });