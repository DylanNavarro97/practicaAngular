import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>Comentarios de lo que sea</h3>
    <img src="https://static01.nyt.com/images/2016/08/05/us/05onfire1_xp/05onfire1_xp-superJumbo-v2.jpg"/>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem reprehenderit tempora fugiat dolor odit sed dicta perspiciatis laboriosam? Nihil voluptates inventore, ad corrupti sint, quos, nisi eius sapiente cumque nemo amet. Nostrum, aliquid qui. Quisquam sint tenetur consectetur nulla est voluptate aliquam aut quibusdam maiores sapiente? Quas iste voluptatibus praesentium.
    </p>
  `,
  styles: `
    img{
      width: 100%;
      height: auto;
    }
  `
})
export class CommentsComponent {

}
