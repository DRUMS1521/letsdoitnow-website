<template>
    <div class="layout-card-blog">
        <div class="entry-blog">
            <h4 class="subtitle-2">{{ title }}</h4>
            <div class="line"></div>
            <p>{{ nameCreator }} | {{ timeRead }} | {{ category}}</p>
        </div>
    </div>
</template>

<script>
export default{
    props:{
        title:{
            type: String
        },
        nameCreator:{
            type: String
        },
        timeRead:{
            type: String
        },
        category:{
            type: String
        },
    }
}
</script>

<style>
.layout-card-blog{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-direction: column;
        width: 350px;
        height: 200px;
        margin-bottom: 24px;
        border-radius: 4px;
        background-image: url("../../assets/img-blog-background.png");
}

.entry-blog{
    display: inline-flex;
    padding: 8px;
    margin-bottom: 16px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color: white;
    border-radius: 4px;
}

.entry-blog h4, p{
    color: #333333;
    text-align: left;
    margin-block-start: 0;
    margin-block-end: 0;
}

.line{
    margin: 10px 0;
    width: 300px;
    height: 0.5px;
    background-color: #A8A8A8;
}

@media screen and (max-width: 768px){
    .layout-card-blog{
        width: fit-content;
    }

    

}
@media screen and (max-width: 350px){
    .layout-card-blog{
        width: 250px;
    }

    

}
</style>