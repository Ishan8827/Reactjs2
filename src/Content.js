import React from 'react';
 
  function Content() {
    return (
       <div>
         <section class="">
              <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                     <img class="d-block w-100" src="https://prod-virtuoso.dotcmscloud.com/dA/188da7ea-f44f-4b9c-92f9-6a65064021c1/heroImage1/PowerfulReasons_hero.jpg" alt="First slide" style={{height:"auto"}}/>
                  </div>
                  <div class="carousel-item">
                     <img class="d-block w-100 " src="https://picsum.photos/200" alt="Second slide" style={{height:"auto"}}/>
                  </div>
                  <div class="carousel-item">
                     <img class="d-block w-100" src="https://picsum.photos/200" alt="Third slide" style={{height:"auto"}}/>
                  </div>
                </div>
               </div>
        </section>   
 
        <section class="bg-light" id="about">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-12">
                 <h3 class="text-center mt-4 text-secondary">Know about us</h3>
               </div>
              </div>
             <div class="row">
                <p class="mt-4 mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                    sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
                    like Aldus PageMaker including versions of Lorem Ipsum</p>
             </div>   
          </div>   
        </section>   
 
        <section class="" id="destinations">   
         <div class="container">
             <div class="row">
              <div class="col-sm-12 col-md-12">
                 <h3 class="text-center mt-4 text-secondary">Favourite Destinations</h3>
               </div>
              </div>
              <div class="row">
                 <div class="col-sm-4 mb-5">
                    <div class="card mt-4">
                       <img class="card-img-top" src="data:image/jpeg;base64,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" alt=""/>
                       <div class="card-body">
                          <h4 class="card-title text-secondary">Japan</h4>
                          <p class="card-text text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
                       </div>
                       <div class="card-footer">
                          <a href="#" class="btn btn-primary">Find Out More!</a>
                       </div>
                    </div>
                 </div>
                 <div class="col-sm-4 mb-5">
                    <div class="card mt-4">
                       <img class="card-img-top" src="https://static5.depositphotos.com/1030296/395/i/600/depositphotos_3958211-stock-photo-new-york-cityscape-tourism-concept.jpg" alt=""/>
                       <div class="card-body">
                          <h4 class="card-title text-secondary">U.S.A.</h4>
                          <p class="card-text text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
                       </div>
                       <div class="card-footer">
                          <a href="#" class="btn btn-primary">Find Out More!</a>
                       </div>
                    </div>
                 </div>
                 <div class="col-sm-4 mb-5">
                    <div class="card mt-4">
                       <img class="card-img-top" src="https://www.nationsonline.org/gallery/India/Delhi-India-Government.jpg" alt=""/>
                       <div class="card-body">
                          <h4 class="card-title text-secondary">India</h4>
                          <p class="card-text text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
                       </div>
                       <div class="card-footer">
                          <a href="#" class="btn btn-primary">Find Out More!</a>
                       </div>
                    </div>
                 </div>
              </div>
        </div>
       </section>  
 
 
       <section class=""  id="places">
        <div class="container">
          <div class="col-sm-12 col-md-12 mb-4">
             <h3 class="text-center text-secondary mt-4">Places and Description</h3>
         </div>
       <div class="accordion" id="accordionExample">
        <div class="card">
         <div class="card-header" id="headingOne">
            <h2 class="mb-0">
            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
               Tourist Places
            </button>
            </h2>
         </div>
 
         <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div class="card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
         </div>
      </div>
      <div class="card">
         <div class="card-header" id="headingTwo">
            <h2 class="mb-0">
            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Best Destination
            </button>
            </h2>
         </div>
         <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div class="card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
         </div>
      </div>
      <div class="card">
         <div class="card-header" id="headingThree">
            <h2 class="mb-0">
            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
               Best Heritages
            </button>
            </h2>
         </div>
         <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div class="card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
         </div>
      </div>
      </div>
    </div> 
    </section>
 
     
    <section class="bg-light mt-5" id="tourist">    
     <div class="container">
      <div class="row text-center">
        <div class="col-sm-12 col-md-12 mb-4">
            <h3 class="text-center mt-4 text-secondary">Tourist Opinions</h3>
         </div>
        <div class="col-md-4">
          <div class="testimonial mb-5">
           <div class="avatar mx-auto">
            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg" class="rounded-circle z-depth-1 img-fluid"/>
          </div>
          <h4 class="font-weight-bold dark-grey-text mt-4">Anna Deynah</h4>
          <h6 class="font-weight-bold blue-text my-3">Tourist</h6>
          <p class="font-weight-normal dark-grey-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
            eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.</p>
        </div>
      </div>
 
      <div class="col-md-4">
        <div class="testimonial mb-5">
          <div class="avatar mx-auto">
            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg" class="rounded-circle z-depth-1 img-fluid"/>
          </div>
          <h4 class="font-weight-bold dark-grey-text mt-4">John Doe</h4>
          <h6 class="font-weight-bold blue-text my-3">Tourist</h6>
          <p class="font-weight-normal dark-grey-text">Ut enim ad minima veniam, quis nostrum exercitationem ullam
            corporis suscipit laboriosam, nisi ut aliquid commodi.</p>
        </div>
 
      </div>
      <div class="col-md-4">
        <div class="testimonial mb-5">
          <div class="avatar mx-auto">
            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" class="rounded-circle z-depth-1 img-fluid"/>
          </div>
          <h4 class="font-weight-bold dark-grey-text mt-4">Maria Kate</h4>
          <h6 class="font-weight-bold blue-text my-3">Toursit</h6>
          <p class="font-weight-normal dark-grey-text">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti.</p>
        </div>
        </div>
      </div>
    </div> 
   </section> 
   </div>
    );
  }
   
  export default Content;