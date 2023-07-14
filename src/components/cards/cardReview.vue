<template>
    <div class="layout-card-review">
        <h4 class="subtitle-3">Norem ipsum dolor sit amet, consectetur adipiscing elit</h4>
        <p>Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.</p>
        <div class="name-review">
            <img src="../../assets/icon-review.svg" alt="">
            <div>
               <h5>Juan Carlos</h5>
                <h6>CEO, Name Company</h6> 
            </div>
            
        </div>
    </div>
</template>

<script>

</script>

<style>
.layout-card-review{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 3rem 2rem;
    width: 300px;
    height: fit-content;
    border-radius: 15px;
    box-shadow: 7px 11px 22px 0px rgba(101, 101, 101, 0.25);
}

.name-review{
    max-height: fit-content;
    text-align: left;
    align-items: left;
    justify-items: left;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
}

.name-review h5{
    color: #333;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: 0.32px;
    margin-block: 0;
}

.name-review h6{
    color: #333;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 0.32px;
    margin-block: 0;
}
</style>