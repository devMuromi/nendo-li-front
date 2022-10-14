<nav>
    <a href="/">Home</a>
    <a href="/nendoroids">Nendoroids</a>
    <!-- <a href="/my">My Page</a>
    <a href="/settings">Settings</a> -->
</nav>
<div id="main">
    <slot></slot>
</div>

<style>
    :global(body) {
        margin: 0px;
        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    }
    nav {
        position: fixed;
        display: inline-block;
        width: 80px;

        height: 100%;
        margin: 0;
        background-color: whitesmoke;
    
    }
    a:hover {
        background-color: gainsboro;
    }
    a {
        display: block;
        height: 80px;
        line-height: 80px;
        text-align: center;
        border: 1px solid #ddd;
        font-weight: 600;
        color: black;
        font-size: 0.875rem; /* 14px */
        text-decoration-line: none;
    }
    #main {
        display: inline-block;
        align-items: right;
        height: 100vh;
        margin: 0;
        margin-left: 80px;
        padding: 10px;
    }
</style>