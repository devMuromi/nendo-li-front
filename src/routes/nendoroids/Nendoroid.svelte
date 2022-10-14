<script>
    export let id = ""

    async function getAPIData() {
        const url = 'http://127.0.0.1:8000/nendoroid/nendoroid/' + id;

        const res = await fetch(url);
        const data = await res.json()

        // console.log(data[0].name_en);
        // data = data[0].name_en;

        if (res.ok) {
			return data.name_en;
		} else {
			throw new Error("error");
		}
    }

    let promise = getAPIData();

    function handleClick() {
		promise = getAPIData(); 
	}
</script>

<div class="nendo-block">
    <div>Nendo: {id}</div>
    
    {#await promise}
        <p>...waiting</p>
    {:then api}
        <p>The api is {api}</p>
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}
    

</div>






<style>
    .nendo-block {
		width: 100px;
		border: 1px solid #aaa;
		border-radius: 2px;
		box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
		padding: 1em;
        margin: 1em;
    }
</style>