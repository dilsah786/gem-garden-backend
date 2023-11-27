# Gem-Garden Backend

# Description
Gem-Garden Backend is the server-side component of the Gem-Garden project, providing APIs for user authentication, product management, and user address details. The backend is built using Node.js, Express, and MongoDB.

# Table of Contents
<h3>
 <ul>
 <li>Installation</li>
  <li>Usage</li>
  <li>Endpoints</li>
  <li>Contributing</li>
  <li>License</li>
</ul>
</h3>

<h2>Installation</h2>
git clone <github-repo-url>

# Endpoints for User Authentication
<h2>POST /user/signup</h2>

![Screenshot_20231127_194003](https://github.com/dilsah786/gem-garden-backend/assets/120841935/408205c2-b221-47b3-b2f0-dad52e5ae6bd)

<h2>POST /user/login</h2>

![Screenshot_20231127_194021](https://github.com/dilsah786/gem-garden-backend/assets/120841935/9111cdbf-5b9a-4de4-adbc-861eed70f3ff)

![Screenshot_20231127_200958](https://github.com/dilsah786/gem-garden-backend/assets/120841935/75061a63-f830-4679-9a69-c118678acbf4)

# Endpoints for Getting the data 
url/jewellery 
url/rings     
url/necklaces 

![Screenshot_20231127_201445](https://github.com/dilsah786/gem-garden-backend/assets/120841935/91ecd6bf-e2d0-4c0f-8151-3d1f160122ef)



 <h2>Sorting</h2>    
 <h3>Sort in Ascending Order</h3>
 <h4>Example Sorting By price</h4>
<p>url/jwellery?sortBy=price&order=asc  </p>
<br/>
 <h3>Sort in Descending Order</h3>
 <h4>Example sorting by title</h4>
<p>url/jewellery?sortBy=title&order=desc  </p>

 <h2>Pagination</h2>    
 <h4>Example for Pagination</h4>
<p>url/jewellery?page=1&limit=10  </p>

 <h2>Pagination and Sorting together</h2>    
  <h3>Sort in Ascending Order</h3>
<p>url/jewellery?page=1&limit=3&sortBy=price&order=asc</p>
<br/>

  <h3>Sort in Descending Order</h3>
<p>url/jewellery?page=1&limit=3&sortBy=price&order=desc</p>


<h2>Filtering the Product according to key and value</h2>
<p>/jewellery?title=Sparkling Double Halo Stud Earrings</p>




# Endpoints for User Address
<h2>GET /user/addresses</h2>

![Screenshot_20231127_194633](https://github.com/dilsah786/gem-garden-backend/assets/120841935/ffead6a4-d51e-431f-b40b-f57e7dd53475)

<h2>PATCH /user/address/edit/:id</h2>
<h4>Pass id for edit the address and necessary data with valid key which is already present </h4>

<h2>DELETE /user/address/delete/:id</h2>
<h4>Pass id for deleting the address </h4>





