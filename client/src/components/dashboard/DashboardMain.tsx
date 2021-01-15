import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { BiX, BiSearch } from 'react-icons/bi';
import { GoHeart } from 'react-icons/go';
import Img from '../../img/urbanbrush-20190214083430029790.png';
const Warp = styled.div`
  height: 100%;
  background-color: #13141c;
  overflow-y: scroll;
`;
const HeaderWrap = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 30px 0 rgba(2, 2, 3, 0.7);
  padding: 30px;
`;
const HeaderTop = styled.div`
  display: flex;
`;
const LoginBtn = styled.button`
  opacity: 1;
  color: #f0f0f0;
  background: #202230;
  border: none;
  line-height: 35px;
  padding: 0 20px;
  border-radius: 5px;
`;
const HeaderMiddle = styled.div`
  display: flex;
  margin-bottom: 25px;
`;
const ItemsDiv = styled.div`
  display: flex;
  flex: 1;
`;
const LeftItem = styled(ItemsDiv)`
  justify-content: flex-start;
`;
const RightItem = styled(ItemsDiv)`
  justify-content: flex-end;
`;
const MainTitle = styled.span`
  line-height: 32px;
  font-weight: 700;
  font-size: 32px;
  color: #f0f0f0;
`;
const HeaderBottom = styled.div`
  display: flex;
  margin-bottom: 15px;
`;
const FilterWrap = styled.div`
  display: flex;
  flex: 1;
`;
const Form = styled.form``;
const Select = styled.select`
  display: none;
  background-color: #212330;
  border: none;
  outline: none;
  border-radius: 5px;
  color: #f0f0f0;
  padding: 5px;
  margin-right: 15px;
`;
const Dropdown = styled.div``;
const CustomSelect = styled.div`
  background-color: #212330;
  border: none;
  outline: none;
  border-radius: 5px;
  color: #f0f0f0;
  padding: 5px;
  margin-right: 15px;
`;
const Option = styled.option`
  display: ${(props: { isdefault: boolean }) =>
    props.isdefault ? 'none' : 'block'};
`;
const CustomOption = styled.div`
  display: ${(props: { isdefault: boolean }) =>
    props.isdefault ? 'none' : 'block'};
`;
const SearchInputWrap = styled.div``;
const SearchInput = styled.input`
  background: #202230;
  border: none;
  padding: 0 40px 0 15px;
  line-height: 30px;
  outline: none;
  color: #f0f0f0;
  border-radius: 5px;
  &:focus {
    &::-webkit-input-placeholder {
      color: transparent;
    }

    &::-moz-placeholder {
      color: transparent;
    }

    &:-ms-input-placeholder {
      color: transparent;
    }

    &::-ms-input-placeholder {
      color: transparent;
    }
  }
`;
const FilterCard = styled.span`
  width: 90px;
  background-color: #212330;
  color: #f0f0f0;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  padding: 3px;
`;
const Search = styled(BiSearch)`
  position: relative;
  top: 22%;
  right: 13%;
  font-size: 20px;
  color: #f0f0f0;
`;
const BodyWrap = styled.div`
  width: 1480px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;
const CardWrap = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  margin-bottom: 50px;
`;
const Cardli = styled.li`
  width: 300px;
  height: 372px;
  margin: 35px;
`;
const CardDiv = styled.div`
  color: currentColor;
  text-decoration: none;
  display: inline-table;
`;
const Card = styled.div`
  width: 300px;
  margin: 5% auto;
  box-shadow: 0 1px 30px rgba(0, 0, 0, 0.4);
  display: block;
  background-color: #212330;
  border-radius: 4px;
  transition: 400ms ease;
`;
const CardImgWrap = styled.div`
  height: 225px;
`;
const CardImg = styled.img`
  width: 100%;
  border-radius: 4px 4px 0px 0px;
`;
const CardContents = styled.div`
  position: relative;
  background: #212330;
  padding: 15px 25px 5px 25px;
`;
const CardFooter = styled.div`
  padding: 10px 25px 10px 25px;
  border-radius: 0px 0px 4px 4px;
  border-top: 1px solid #000000;
  background: #30323d;
  color: #f0f0f0;
  display: inline-table;
  width: 100%;
  box-sizing: border-box;
  transition: 400ms ease;
`;
const Title = styled.h1`
  font-size: 22px;
  color: #f0f0f0;
  margin: 0 0 15px 0;
`;
const Explanation = styled.p`
  font-size: 14px;
  color: #f0f0f0;
  margin: 0 0 10px 0px;
`;
const CardExercise = styled.h5`
  margin: 0;
`;
const Marker = styled(GoHeart)`
  font-size: 30px;
  background: #446cb3;
  color: #fff;
  padding: 5px 5px;
  border-radius: 50%;
  position: absolute;
  right: 20px;
  top: -22px;
  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.2);
  transition: 400ms ease;
  cursor: pointer;
  &:active {
    color: #ff0000;
  }
`;
const filterModels = [
  {
    id: 0,
    name: 'excercises',
    label: 'EXCERCISES',
    options: [
      {
        label: 'EXCERCISES',
        value: 'excercises',
        isDefault: true,
      },
      {
        label: '등',
        value: 'back',
      },
      {
        label: '허리',
        value: 'waist',
      },
      {
        label: '복부',
        value: 'stomach',
      },
      {
        label: '하체',
        value: 'lower body',
      },
    ],
  },
  {
    id: 1,
    name: 'equipment',
    label: 'EQUIPMENT',
    options: [
      {
        label: 'EQUIPMENT',
        value: 'equipment',
        isDefault: true,
      },
      {
        label: '아령',
        value: 'dumbbell',
      },
      {
        label: '밴드',
        value: 'band',
      },
    ],
  },
];
const DashboardMain = () => {
  const { register, setValue, watch } = useForm();
  const [filterArr, setFilterArr] = useState<string[]>([]);
  const onChangeSelect = (
    e: React.ChangeEvent<HTMLSelectElement>,
    name: string,
  ) => {
    e.preventDefault();
    setFilterArr((props) => [...props, e.target.value]);
    setValue(name, name);
  };
  return (
    <Warp>
      <HeaderWrap id="asd">
        <HeaderTop>
          <ItemsDiv>
            <LeftItem></LeftItem>
          </ItemsDiv>
          <ItemsDiv>
            <RightItem>
              <LoginBtn>LOGIN</LoginBtn>
            </RightItem>
          </ItemsDiv>
        </HeaderTop>
        <HeaderMiddle>
          <ItemsDiv>
            <LeftItem>
              <MainTitle>Dashboard</MainTitle>
            </LeftItem>
          </ItemsDiv>
          <ItemsDiv>
            <RightItem></RightItem>
          </ItemsDiv>
        </HeaderMiddle>
        <HeaderBottom>
          <FilterWrap>
            <Form>
              {filterModels.map((model) => {
                return (
                  <div key={model.id}>
                    <Select
                      defaultValue={model.name}
                      name={model.name}
                      onChange={(e) => {
                        onChangeSelect(e, model.name);
                      }}
                      ref={register}
                    >
                      {model.options.map((op) => (
                        <Option
                          key={op.value}
                          value={op.value}
                          isdefault={!!op.isDefault}
                        >
                          {op.label}
                        </Option>
                      ))}
                    </Select>
                    <Dropdown>{watch(model.name)}</Dropdown>
                    <CustomSelect>
                      {model.options.map((op) => (
                        <CustomOption key={op.value} isdefault={!!op.isDefault}>
                          {op.label}
                        </CustomOption>
                      ))}
                    </CustomSelect>
                  </div>
                );
              })}
            </Form>
          </FilterWrap>
          <SearchInputWrap>
            <SearchInput placeholder="검색어를 입력해주세요." />
            <Search />
          </SearchInputWrap>
        </HeaderBottom>
        <FilterCard>
          등 운동
          <BiX />
        </FilterCard>
      </HeaderWrap>
      <BodyWrap>
        <CardWrap>
          <Cardli>
            <CardDiv>
              <Card>
                <CardImgWrap>
                  <CardImg src={Img} />
                </CardImgWrap>
                <CardContents>
                  <Marker />
                  <Title>운동 이름</Title>
                  <Explanation>
                    이제 이곳에는 이 운동이 어떤운동인지 설명이나 운동 방법
                    같은것을 적는 공간 일단 왜 때문인지 길게 적어야 할것 같아서
                    일단 아무말이나 적어보는 중
                  </Explanation>
                </CardContents>
                <CardFooter>
                  <CardExercise>이곳은 어느 부위인지</CardExercise>
                </CardFooter>
              </Card>
            </CardDiv>
          </Cardli>
        </CardWrap>
      </BodyWrap>
    </Warp>
  );
};

export default DashboardMain;
