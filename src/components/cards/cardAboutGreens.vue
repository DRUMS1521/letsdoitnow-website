<template>
    <div class="card-style-green">
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
.card-style-green{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 400px;
    height: 230px;
    padding: 2rem;

}

.card-style-green h2{
    margin-block-start: 0;
    text-align: start;
    color: #263F28;
}
</style>