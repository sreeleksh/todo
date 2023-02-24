import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
constructor(private hero:HeroService){

}
todo:any
ngOnInit()
{
  this.hero.getdata().subscribe(data =>
    {
    this.todo = data;
  })
console.log(this.todo[0]);
}
updateitem(id:any): void{

}

deleteitem(id:any){
  this.todo=this.todo.filter((t:any) => t.id !=id)
}

}
