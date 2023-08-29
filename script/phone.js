
const loadPhone = async (searchText='13', isShowAll) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data; 
    // console.log(phones);
    displayPhones(phones, isShowAll);
} 
const displayPhones = (phones, isShowAll) =>{
     // step:1 connect to id
     const phoneContainer = document.getElementById('phone-container');
    //  clear phonContainer cards before adding new cards
    phoneContainer.textContent = '';

    const showAllContainer = document.getElementById('show-All-container');
    if(phones.length > 12 && !isShowAll){
        showAllContainer.classList.remove('hidden');
    }
    else{
        showAllContainer.classList.add('hidden')
    }
    // console.log('is show all', isShowAll);
    // dosplay only first 12 phone cards
    if(!isShowAll){
        phones = phones.slice(0,12);
    }

    phones.forEach(phone =>{
        // console.log(phone);   
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
                    <button onclick="handelShowDetail('${phone.slug}')" class="btn btn-primary">Show Details</button>
                  </div>
                </div>
        `;
        // step:4 appendChild
        phoneContainer.appendChild(phoneCard);
    });
    // hide loading bar
    toggleLoadingBars(false)
}

// 
const handelShowDetail = async (id) =>{
    //  console.log('clicked', id);

     const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
     const data = await res.json();
     const phone = data.data; 
     showPhoneDetails(phone);
}

// show phone details
const showPhoneDetails = (phone) =>{
    // show the modal
    console.log(phone );
    const phoneName = document.getElementById('show-detail-phone-name');
    phoneName.innerText = phone.name;

    const showDetailContainer = document.getElementById('show-detail-container');
    showDetailContainer.innerHTML = `
    <div class="my-6 justify-center flex">
    <img src="${phone.image}" alt="">
    </div>
    <p class="mb-3">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
    <p class="mb-3"><span class="font-bold">Storage: </span>${phone?.mainFeatures?.storage}</p>
    <p class="mb-3"><span class="font-bold">Display Size: </span>${phone?.mainFeatures?.displaySize}</p>
    <p class="mb-3"><span class="font-bold">Chipset: </span>${phone?.mainFeatures?.chipSet}</p>
    <p class="mb-3"><span class="font-bold">Memory: </span>${phone?.mainFeatures?.memory
    }</p>
    <p class="mb-3"><span class="font-bold">Slug: </span>${phone?.slug}</p>
    <p class="mb-3"><span class="font-bold">Release data</span>${phone?.releaseDate
    }</p>
    <p class="mb-3"><span class="font-bold">Brand: </span>${phone?.brand}</p>
    <p class="mb-3"><span class="font-bold">GPS: </span>${phone?.others
        ?.GPS}</p>
    `;
    



    show_detail_modal.showModal();

}

// handelSaech Button
const handelSarch = (isShowAll) =>{
    toggleLoadingBars(true);
    const searchField = document.getElementById('search-field');
     const searchText = searchField.value;
     console.log(searchText);
     loadPhone(searchText, isShowAll);
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
 
const handelShowAll = () =>{
    handelSarch(true);
}


loadPhone();

