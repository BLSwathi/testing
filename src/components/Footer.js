import { components } from "react";
export class Footer extends components
{
render()
{
return(
<div>
<h1>I am {this.props.personName} and my age is {this.props.age}</h1>
</div>
)
}
}
