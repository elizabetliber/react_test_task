import {Layout, Button, Menu, Dropdown, Typography, Grid} from 'antd';
import Carousel from "./Carousel";

const {useBreakpoint} = Grid;
const {Text} = Typography;
const {Content} = Layout;


function AppHome({data}) {
    const {images} = data

    const screens = useBreakpoint();
    const {lg, md, sm, xl, xs, xxl} = screens

    function handleMenuClick(e) {
        console.log('click', e);
    }

    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="1">Подробнее</Menu.Item>
            <Menu.Item key="2">Редактировать</Menu.Item>
            <Menu.Item key="3">Удалить</Menu.Item>
        </Menu>
    );
    return (
        <Content>
            <div className="daysOfTheWeek">
                <Text className="daysOfTheWeek__time">15:00</Text>
                <Text className='daysOfTheWeek__days'>ср-сб</Text>
            </div>
            <div className="mainBlock">
                <Text className="mainBlock__text">
                    {lg && data.descriptionText}
                    {(md || sm) && !lg && data.descriptionTextTwo}
                    {xs && data.descriptionTextTwo.slice(0, 15) + "..."}
                </Text>
                <div className="mainBlock__wrapper">
                    <div className="mainBlock__imageAndTextWrapper">
                        {(lg || xs) && (
                            <>
                                {images.map((item) => {
                                    return <img width={32} src={item.url} className="image"/>
                                })}
                            </>
                        )
                        }
                        {(md || sm) && !lg && (
                            <>
                                <img src="./images/Oval.svg" alt="" style={{width: "32px", height: "32px"}}/>
                                <Text className="mainBlock__nameOfTeacher">Ирина Никифорова</Text>
                            </>
                        )}
                    </div>
                    <div className="carousel">
                        <Carousel data={data}/>
                    </div>
                </div>
            </div>
            {(md || sm || xs || lg) && (
                <>
                    <Dropdown.Button
                        overlay={menu}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "absolute",
                            top: lg ? "22px" : '24px',
                            right: lg ? "30px" : '24px',
                            borderRadius: "50%"
                        }}
                        className="dropdown-btn"
                    />
                    <Button type="primary"
                            style={{
                                width: xs ? '134px' : '146px',
                                height: xs ? '39px' : '33px',
                                position: "absolute",
                                bottom: lg ? "30px" : '24px',
                                right: lg ? "30px" : '24px',
                                left: xs ? "24px" : "none",
                                backgroundColor: "#1DABF2",
                            }}>
                        <Text
                            className='buttonAndDots__text'
                            style={{color: 'white'}}
                        >
                            Войти в класс
                        </Text>
                    </Button>
                </>
            )}
        </Content>
    )
}

export default AppHome;
