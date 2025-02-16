const data = [
    { name: 'Rahim', address: 'Dhaka', position: 'Manager', phone: '017xxxxxx1' },
    { name: 'Karim', address: 'Chittagong', position: 'Developer', phone: '017xxxxxx2' },
    { name: 'Sajid', address: 'Sylhet', position: 'Designer', phone: '017xxxxxx3' },
    { name: 'Jabir', address: 'Rajshahi', position: 'Tester', phone: '017xxxxxx4' }
  ];
  
  function searchData() {
    const searchValue = document.getElementById('search').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Clear previous results
    resultDiv.style.display = 'none'; // Hide results initially
  
    const filteredData = data.filter(item => item.name.toLowerCase().includes(searchValue));
  
    if (filteredData.length > 0) {
      resultDiv.style.display = 'block';
      filteredData.forEach(item => {
        const p = document.createElement('p');
        p.classList.add('detail');
        p.innerHTML = `Name: ${item.name}<br>Address: ${item.address}<br>Position: ${item.position}<br>Phone: ${item.phone}`;
        resultDiv.appendChild(p);
      });
    } else {
      resultDiv.style.display = 'block';
      const p = document.createElement('p');
      p.classList.add('no-result');
      p.innerHTML = 'No results found!';
      resultDiv.appendChild(p);
    }
  }
  