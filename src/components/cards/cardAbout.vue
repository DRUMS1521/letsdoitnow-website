<template>
    <div class="card-style">
        <h2>{{titleText}}</h2>
        <p>{{descriptionText}}</p>
    </div>
</template>

<script>
export default{
    props:{
        titleText:{
            type: String
        },
        descriptionText:{
            type: String
        }
    }
}

</script>

<style>
.card-style{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 300px;
    height: 200px;
    padding: 2rem;
    border-radius: 5px;
    background: #FFF;
    box-shadow: 4px 3px 11px 0px rgba(0, 0, 0, 0.41);
}

.card-style h2{
    margin-block-start: 0;
    text-align: start;
    color: #263F28;
}
</style>