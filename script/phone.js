
const loadPhone = async (searchText) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data; 
    // console.log(phones);
    displayPhones(phones);
} 
const displayPhones = phones =>{
     // step:1 connect to id
     const phoneContainer = document.getElementById('phone-container');
    //  clear phonContainer cards before adding new cards
    phoneContainer.textContent = '';

    const showAllContainer = document.getElementById('show-All-container');
    if(phones.length > 12){
        showAllContainer.classList.remove('hidden');
    }
    else{
        showAllContainer.classList.add('hidden')
    }
    // dosplay only first 12 phone cards
    phones = phones.slice(0,12);

    phones.forEach(phone =>{
        console.log(phone);   
        // step:2 creat a div
        const phoneCard = document.createElement('div');
        phoneCard.classList =`card  bg-gray-100 py-6 px-4 shadow-xl`;
        // step:3 set inner html
        phoneCard.innerHTML = `
            <figure><img src="${phone.image}" alt="Shoes" /></figure>
                <div class="card-body">
                  <h2 class="text-center text-2xl font-semibold my-2">${phone.phone_name}</h2>
                  <p class="mb-4">There are many variations of passages of available, but the majority have suffered</p>
                  <h3 class="text-center text-2xl font-bold">$999</h3>
                  <div class="flex justify-center">
                    <button class="btn btn-primary">Show Details</button>
                  </div>
                </div>
        `;
        // step:4 appendChild
        phoneContainer.appendChild(phoneCard);
    });
    // hide loading bar
    toggleLoadingBars(false)
}

// handelSaech Button
const handelSarch = () =>{
    toggleLoadingBars(true);
    const searchField = document.getElementById('search-field');
     const searchText = searchField.value;
     console.log(searchText);
     loadPhone(searchText);
} 

const toggleLoadingBars = (isLoding) =>{
    const loadingBars = document.getElementById('loading-bars');
    if(isLoding){
        loadingBars.classList.remove('hidden');
    }
    else{
        loadingBars.classList.add('hidden');

    }


}


// loadPhone();

