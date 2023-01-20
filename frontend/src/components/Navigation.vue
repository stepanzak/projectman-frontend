<template>
    <nav class="site-navigation">
        <img src="https://www.svgrepo.com/show/404877/bread.svg" class="site-logo" alt="sample bread logo">
        <ul class="nav-buttons">
            <a href="https://www.github.com/stepanzak/tatuv-managment" class="nav-btn">zdrojový kód</a>
            <a class="nav-btn">odhlásit</a>
            <a class="nav-btn">změnit barvy</a>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Navigation'
}
</script>

<style>
.site-navigation {
    position: fixed;
    background-color: var(--main-color);
    top: 0;
    left: 0;
    right: 0;
    padding: 0px;
    padding-right: 40px;
    height: 70px;
    display: grid;
    grid-template-columns: 1fr 4fr 3fr;
    grid-template-areas:
        "site-logo . nav-buttons";
}

.nav-buttons {
    grid-area: nav-buttons;
    display: flex;
    justify-content: flex-end;
    list-style: none;
    padding: 0px;
    margin: 0px;
}

.nav-btn {
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 25px;
    color: black;
    text-decoration: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.nav-btn:hover {
    background-color: var(--main-color-darker);
    cursor: pointer;
}

.site-logo {
    width: 70px;
    height: 70px;
}
</style>