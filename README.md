<h1>Wishlist</h1>
This website is my final project for Phase 2 of the Flatiron School software engineering program. This phase focused on introducing React as a tool, and how to make single-page websites more interactive.

<h3>Setup: </h3>
json-server is required to run this website and can be installed with the following command:

```npm install -g json-server```

Using the given files, you will need to initialize the server before being able to load any content:

```json-server --watch db.json```

```npm start```

<h3>Description: </h3>
When the page initially loads, you will see the *homepage* rendering with a list of card for the current items. A navigation bar at the top of the page allows you to navigate to the *Add new items* page, and the *Recently deleted* page. The *Add new items* page allows a user to fill out a new item form, and preview what their item card will look like. The form contains 5 fields: **name, necessity, price, image, and a description**. After filling these fields, and clicking **submit**, the user will be redirected to the *homepage*, which has been updated with the new item.
<br />
<br />

<img src="https://github.com/PRSheridan/phase-2-project/assets/142257140/0650dec1-ea5a-476f-a7ac-3e644b4177c2" alt="Add item gif" width="500" />
<br />
<br />

Each item on the *homepage* can be **edited**, or **deleted**. When the edit button is clicked, the user is redirected to the *Edit item* page which is prefilled with the existing values of the item. This page functions exactly like the *Add new items* page. When an item is deleted, it's card is removed from the *homepage*, and will display in the *Recently deleted* page. Items on this page can be **restored**, or **shredded**. When the restore button is clicked, the item is sent back to the *homepage*. When the shred button is clicked, the item is fully erased and cannot be recovered. Items in both the *homepage* and *Recently deleted* page can be sorted by name (alphabetically), price, and necessity.
<br />
<br />

<img src="https://github.com/PRSheridan/phase-2-project/assets/142257140/3f6dc0af-3b43-464f-9e7d-2c3ba2a963e6" alt="other features gif" width="500" />
<br />
<br />


**Features:**
- Add items
	- Include name, necessity, price, image, and description.
	- Preview items before adding them to the homepage.
	- Items stored on local server db.json.
- Remove items
	- Removed items are stored in a recently deleted page, and can be restored or permanently deleted.
- Edit items
	- Preview changes before adding them to the homepage. 
- Sort items by name (alphabetically), price, and necessity.
<br />

**Future plans:**
- Deploy as standalone site.
- Make categories/category page.
- Allow manual reordering to replace necessity value.
- pop-up notifying item creation, deletion and edit
<br />

Contact Me: [PRSheridan (github.com)](https://github.com/PRSheridan) [philrsheridan@gmail.com](mailto:philrsheridan@gmail.com)

