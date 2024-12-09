import styled from "styled-components";
import hashlogo from "../img/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketballOutlined";
import SportsEsportsIcon from "@mui/icons-material/SportsEsportsOutlined";
import MovieFilterOutlinedIcon from "@mui/icons-material/MovieFilterOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";

const Menu = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={hashlogo} />
            HashmiTube
          </Logo>
        </Link>

          <Link to='/' style={{ textDecoration: "none", color: "inherit" }}>
        <Item>

          <HomeIcon />
          Home
        </Item>
          </Link>
        <Item>
          <ExploreIcon />
          Explore
        </Item>
        <Item>
          <SubscriptionsIcon />
          Subscriptions
        </Item>
        <Hr />
        <Item>
          <VideoLibraryIcon />
          Library
        </Item>
        <Item>
          <HistoryIcon />
          Hitory
        </Item>
        <Hr />
        <Login>
          Sign in to like videos, comment, and subscribe.
          <Link to='signin' style={{ textDecoration: "none", color: "inherit" }}>
          <Button>
            <AccountCircleOutlinedIcon />
            SIGN IN
          </Button>
          
          </Link>
        </Login>
        <Hr />
        <Title>BEST OF HASHMITUBE</Title>
        <Item>
          <LibraryMusicIcon />
          Music
        </Item>
        <Item>
          <SportsBasketballIcon />
          Sports
        </Item>
        <Item>
          <SportsEsportsIcon />
          Gaming
        </Item>
        <Item>
          <MovieFilterOutlinedIcon />
          Movies
        </Item>
        <Item>
          <ArticleOutlinedIcon />
          News
        </Item>
        <Item>
          <LiveTvOutlinedIcon />
          Live
        </Item>
        <Hr />
        <Item>
          <SettingsOutlinedIcon />
          Settings
        </Item>
        <Item>
          <FlagOutlinedIcon />
          Reports
        </Item>
        <Item>
          <HelpOutlineOutlinedIcon />
          Helps
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlinedIcon />
          {darkMode ? "Dark" : "Light"} Mode
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;

const Container = styled.div`
  position: sticky;
  top: 0%;
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  color: ${({ theme }) => theme.text};
`;
const Wrapper = styled.div`
  padding: 18px 26px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;
const Img = styled.img`
  height: 25px;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;
  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0cap.5px solid ${({ theme }) => theme.soft};
`;
const Login = styled.div``;

const Button = styled.button`
  background-color: transparent;
  padding: 5px 15px;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  display: flex;
  align-items: center;
  gap: 4px;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
`;
const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;
