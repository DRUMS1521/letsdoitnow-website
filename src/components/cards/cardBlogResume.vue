<template>
    <div class="layout-card-blog">
        <div class="entry-blog">
            <h4 class="subtitle-2">Titulo de la entrada</h4>
            <div class="line"></div>
            <p>Juan Pablo Sierra | 10min | Tech</p>
        </div>
    </div>
</template>

<script>

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
</style>