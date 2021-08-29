const app = Vue.createApp({});

app.component('nav-bar',{
    template:`<div class="nav-container">
        <a href="index.html">
            <img src="ref-imgs/site-logo.png" height="35" width="120"/>
        </a>
        <ul>
            <li><a href="#characters">Characters</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#votes">Votes</a></li>
        </ul>
        <div id="search-container">
            <input type="text" id="search-txt" placeholder="Search" />
            <button id="search-btn">Search</button>
        </div>
    </div>`
});
app.component('home-page',{
    template:`<div id="home-page">
        <h2> Welcome to Marvel vs DC </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius hic repellendus a, sunt distinctio, deleniti dolore dolorem repellat exercitationem excepturi dolorum, magni obcaecati molestiae cumque nostrum rerum expedita ducimus incidunt!</p>
        <button class="read-more">Read more</button>
    </div>`
});

const articlesData = [
    {
        title:'Superman vs Hulk',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias sint laboriosam similique, quae cumque qui!'
    },
    {
        title:'Spiderman vs Superboy',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias sint laboriosam similique, quae cumque qui!'
    },
    {
        title:'Batman vs Captain America',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias sint laboriosam similique, quae cumque qui!'
    },
    {
        title:'Wolverine vs lobo',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias sint laboriosam similique, quae cumque qui!'
    }
];

app.component('articles',{
    data() {
        return { items: articlesData }
      },
      template:`
      <div id="articles-component">
      <h1>Recent articles</h1>
      <div id="articles-container">
        <div class="articles-card" v-for="item in items">
        <h2>{{ item.title }}</h2>
        <p>{{ item.description }}</p>
      </div>
      </div>
  </div>`
});
app.component('footer-component',{
    data() {
        return { items: articlesData }
      },
      template:`
      <footer>
      <div><i class="far fa-copyright"></i> Marvel vs DC fanpage</div>
        <center>Follow us on: <i class="fab fa-facebook-square"></i> <i class="fab fa-instagram"></i> <i class="fab fa-twitter"></i> <i class="fab fa-snapchat-ghost"></i> <i class="fab fa-youtube"></i>&nbsp;<i class="fab fa-pinterest"></i></center>
      </footer>
      `
});
app.mount('#app');