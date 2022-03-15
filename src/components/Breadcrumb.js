import React from 'react'

function Breadcrumb(props) {
  function isLast(index){
    return index === props.crumbs.lenght -1;
  }

  return (
    <nav>
      <ol>
        {
          props.crumb.map((crumb, ci) => {
            const disabled = isLast(ci) ? 'disabled' : '';
            return (
              <li
              key={ci}>
                <button className={`${ disabled}`} onClick={()=> props.selected(crumb)}>{crumb}</button>
              </li>
            );
          })
        }
      </ol>
    </nav>
  )
}
export default Breadcrumb;