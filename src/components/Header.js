import { Card, CardBody } from "reactstrap";

function Header(){
    return (
        <div style={{ margin: '25px',marginLeft: '0'  }}> 
            <Card className="bg-warning">
                <CardBody>
                    <h1 className="text-center ">
                        Welcome to courses Application
                    </h1>
                </CardBody>
            </Card>

            
        </div>
    )
}

export default Header;