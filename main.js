const container = document.getElementById('container');

// card 
function Card( product )
{
const card = document.createElement('div');
card.className = 'card';
card.innerHTML = `
    <img src="${product.image}" alt="${product.title}" loading='lazy'>
            <p class="Large title ">${product.title}</p>
            <p class="gray">${product.category}</p>
            <div class="price-rating">
            <p class="Large">$${product.price}</p>
            <p class="gray">Rating: ${product.rating.rate}</p>
            </div>
            <button id='${product.id}'>Show Details</button>
    
`;
return card;
}
// fetching data 
async function fetchAPI(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`);
    }
    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

// loading cards
async function LoadCards()
{
    const data = await fetchAPI("./products.json");
    if (!data) {
        console.error("Failed to load products data.");
        return;
    }
    data.forEach(element => {
        const card = Card(element);
        container.appendChild(card);
        // adding event listener to buttons
        const button = card.querySelector("button");
        button.onclick = function() {
             alert(`Product Description: ${element.description}`);
        }
    });

    
}
LoadCards();

