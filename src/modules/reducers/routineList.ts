const SET_ROUTINE_LIST = 'SET_ROUTINE_LIST';

export interface WorkoutOfRoutine {
  id: number;
  title: string;
  instruction: string;
  image: string[];
  parts: string[];
  setCount?: number;
  count?: number;
  breakTime?: number;
  mySetCount: number;
  myCount: number;
  myBreakTime: number;
  calrorie: number;
  category: string;
  tool: string;
}

export interface Routine {
  routineId: number;
  title: string;
  workout: WorkoutOfRoutine[];
}

export interface ActionRoutineList {
  type: string;
  payload: Routine[];
}

// Action Creator - routineList
export const actionSetRoutineList = (
  payload: Routine[],
): ActionRoutineList => ({
  type: SET_ROUTINE_LIST,
  payload,
});

const initialState: Routine[] = 
[
  {
      "title": "아침 스트레칭",
      "routineId": 19,
      "workout": [
          {
              "id": 24,
              "title": "팔 스트레칭",
              "instruction": "전완근 이완과 함께 어깨와 등까지 이완되는 운동이다. ",
              "calrorie": 45,
              "category": "스트레칭",
              "tool": "",
              "image": [
                  "https://ptathomebucket.s3.ap-northeast-2.amazonaws.com/%E1%84%91%E1%85%A1%E1%86%AF+%E1%84%89%E1%85%B3%E1%84%90%E1%85%B3%E1%84%85%E1%85%A6%E1%84%8E%E1%85%B5%E1%86%BCE.gif",
                  "https://ptathomebucket.s3.ap-northeast-2.amazonaws.com/%E1%84%91%E1%85%A1%E1%86%AF+%E1%84%89%E1%85%B3%E1%84%90%E1%85%B3%E1%84%85%E1%85%A6%E1%84%8E%E1%85%B5%E1%86%BC1.png",
                  "https://ptathomebucket.s3.ap-northeast-2.amazonaws.com/%E1%84%91%E1%85%A1%E1%86%AF+%E1%84%89%E1%85%B3%E1%84%90%E1%85%B3%E1%84%85%E1%85%A6%E1%84%8E%E1%85%B5%E1%86%BC2.png"
              ],
              "parts": [
                  
              ],
              "myCount": 15,
              "mySetCount": 1,
              "myBreakTime": 30
          },
          {
              "id": 28,
              "title": "종아리 스트레칭",
              "instruction": "종아리 뒤 가자미근을 풀어주는 운동이다.",
              "calrorie": 15,
              "category": "스트레칭",
              "tool": "",
              "image": [
                  "https://ptathomebucket.s3.ap-northeast-2.amazonaws.com/%E1%84%8C%E1%85%A9%E1%86%BC%E1%84%8B%E1%85%A1%E1%84%85%E1%85%B5+%E1%84%89%E1%85%B3%E1%84%90%E1%85%B3%E1%84%85%E1%85%A6%E1%84%8E%E1%85%B5%E1%86%BC.png",
                  "https://ptathomebucket.s3.ap-northeast-2.amazonaws.com/%E1%84%8C%E1%85%A9%E1%86%BC%E1%84%8B%E1%85%A1%E1%84%85%E1%85%B5+%E1%84%89%E1%85%B3%E1%84%90%E1%85%B3%E1%84%85%E1%85%A6%E1%84%8E%E1%85%B5%E1%86%BC.png"
              ],
              "parts": [
                  
              ],
              "myCount": 3,
              "mySetCount": 1,
              "myBreakTime": 30
          },
          {
              "id": 27,
              "title": "허벅지 스트레칭",
              "instruction": "허벅지와 햄스트링을 포함한 하체를 자극하는 스트레칭이다.",
              "calrorie": 15,
              "category": "스트레칭",
              "tool": "",
              "image": [
                  "https://ptathomebucket.s3.ap-northeast-2.amazonaws.com/%E1%84%92%E1%85%A5%E1%84%87%E1%85%A5%E1%86%A8%E1%84%8C%E1%85%B5+%E1%84%89%E1%85%B3%E1%84%90%E1%85%B3%E1%84%85%E1%85%A6%E1%84%8E%E1%85%B5%E1%86%BC.png",
                  "https://ptathomebucket.s3.ap-northeast-2.amazonaws.com/%E1%84%92%E1%85%A5%E1%84%87%E1%85%A5%E1%86%A8%E1%84%8C%E1%85%B5+%E1%84%89%E1%85%B3%E1%84%90%E1%85%B3%E1%84%85%E1%85%A6%E1%84%8E%E1%85%B5%E1%86%BC.png"
              ],
              "parts": [
                  
              ],
              "myCount": 3,
              "mySetCount": 1,
              "myBreakTime": 30
          },
          {
              "id": 17,
              "title": "복근 스트레칭",
              "instruction": "몸을 최대한 늘여주는 스트레칭을 하는 동시에 복부를 자극하여 근육을 단련할 수 있는 운동이다.",
              "calrorie": 30,
              "category": "스트레칭",
              "tool": "",
              "image": [
                  "https://ptathomebucket.s3.ap-northeast-2.amazonaws.com/%E1%84%87%E1%85%A9%E1%86%A8%E1%84%80%E1%85%B3%E1%86%AB+%E1%84%89%E1%85%B3%E1%84%90%E1%85%B3%E1%84%85%E1%85%A6%E1%84%8E%E1%85%B5%E1%86%BC.png",
                  "https://ptathomebucket.s3.ap-northeast-2.amazonaws.com/%E1%84%87%E1%85%A9%E1%86%A8%E1%84%80%E1%85%B3%E1%86%AB+%E1%84%89%E1%85%B3%E1%84%90%E1%85%B3%E1%84%85%E1%85%A6%E1%84%8E%E1%85%B5%E1%86%BC.png"
              ],
              "parts": [
                  
              ],
              "myCount": 10,
              "mySetCount": 1,
              "myBreakTime": 30
          }
      ]
  },
  {
      "title": "웜업 루틴",
      "routineId": 20,
      "workout": [
          {
              "id": 27,
              "title": "허벅지 스트레칭",
              "instruction": "허벅지와 햄스트링을 포함한 하체를 자극하는 스트레칭이다.",
              "calrorie": 15,
              "category": "스트레칭",
              "tool": "",
              "image": [
                  "https://ptathomebucket.s3.ap-northeast-2.amazonaws.com/%E1%84%92%E1%85%A5%E1%84%87%E1%85%A5%E1%86%A8%E1%84%8C%E1%85%B5+%E1%84%89%E1%85%B3%E1%84%90%E1%85%B3%E1%84%85%E1%85%A6%E1%84%8E%E1%85%B5%E1%86%BC.png",
                  "https://ptathomebucket.s3.ap-northeast-2.amazonaws.com/%E1%84%92%E1%85%A5%E1%84%87%E1%85%A5%E1%86%A8%E1%84%8C%E1%85%B5+%E1%84%89%E1%85%B3%E1%84%90%E1%85%B3%E1%84%85%E1%85%A6%E1%84%8E%E1%85%B5%E1%86%BC.png"
              ],
              "parts": [
                  
              ],
              "myCount": 3,
              "mySetCount": 1,
              "myBreakTime": 30
          },
          {
              "id": 28,
              "title": "종아리 스트레칭",
              "instruction": "종아리 뒤 가자미근을 풀어주는 운동이다.",
              "calrorie": 15,
              "category": "스트레칭",
              "tool": "",
              "image": [
                  "https://ptathomebucket.s3.ap-northeast-2.amazonaws.com/%E1%84%8C%E1%85%A9%E1%86%BC%E1%84%8B%E1%85%A1%E1%84%85%E1%85%B5+%E1%84%89%E1%85%B3%E1%84%90%E1%85%B3%E1%84%85%E1%85%A6%E1%84%8E%E1%85%B5%E1%86%BC.png",
                  "https://ptathomebucket.s3.ap-northeast-2.amazonaws.com/%E1%84%8C%E1%85%A9%E1%86%BC%E1%84%8B%E1%85%A1%E1%84%85%E1%85%B5+%E1%84%89%E1%85%B3%E1%84%90%E1%85%B3%E1%84%85%E1%85%A6%E1%84%8E%E1%85%B5%E1%86%BC.png"
              ],
              "parts": [
                  
              ],
              "myCount": 3,
              "mySetCount": 1,
              "myBreakTime": 30
          },
          {
              "id": 24,
              "title": "팔 스트레칭",
              "instruction": "전완근 이완과 함께 어깨와 등까지 이완되는 운동이다. ",
              "calrorie": 45,
              "category": "스트레칭",
              "tool": "",
              "image": [
                  "https://ptathomebucket.s3.ap-northeast-2.amazonaws.com/%E1%84%91%E1%85%A1%E1%86%AF+%E1%84%89%E1%85%B3%E1%84%90%E1%85%B3%E1%84%85%E1%85%A6%E1%84%8E%E1%85%B5%E1%86%BCE.gif",
                  "https://ptathomebucket.s3.ap-northeast-2.amazonaws.com/%E1%84%91%E1%85%A1%E1%86%AF+%E1%84%89%E1%85%B3%E1%84%90%E1%85%B3%E1%84%85%E1%85%A6%E1%84%8E%E1%85%B5%E1%86%BC1.png",
                  "https://ptathomebucket.s3.ap-northeast-2.amazonaws.com/%E1%84%91%E1%85%A1%E1%86%AF+%E1%84%89%E1%85%B3%E1%84%90%E1%85%B3%E1%84%85%E1%85%A6%E1%84%8E%E1%85%B5%E1%86%BC2.png"
              ],
              "parts": [
                  
              ],
              "myCount": 15,
              "mySetCount": 1,
              "myBreakTime": 30
          },
          {
              "id": 13,
              "title": "런지",
              "instruction": "대퇴근을 갈라져 보이게 할 뿐 아니라 둔근의 발달에도 효과적인 운동이다",
              "calrorie": 140,
              "category": "맨몸",
              "tool": "",
              "image": [
                  "https://ptathomebucket.s3.ap-northeast-2.amazonaws.com/%E1%84%85%E1%85%A5%E1%86%AB%E1%84%8C%E1%85%B5E.gif",
                  "https://ptathomebucket.s3.ap-northeast-2.amazonaws.com/%E1%84%85%E1%85%A5%E1%86%AB%E1%84%8C%E1%85%B51.png",
                  "https://ptathomebucket.s3.ap-northeast-2.amazonaws.com/%E1%84%85%E1%85%A5%E1%86%AB%E1%84%8C%E1%85%B52.png",
                  "https://ptathomebucket.s3.ap-northeast-2.amazonaws.com/%E1%84%85%E1%85%A5%E1%86%AB%E1%84%8C%E1%85%B53.png",
                  "https://ptathomebucket.s3.ap-northeast-2.amazonaws.com/%E1%84%85%E1%85%A5%E1%86%AB%E1%84%8C%E1%85%B54.png"
              ],
              "parts": [
                  "허벅지"
              ],
              "myCount": 20,
              "mySetCount": 1,
              "myBreakTime": 30
          }
      ]
  }
];

const routineList = (
  state = initialState,
  action: ActionRoutineList,
): Routine[] => {
  switch (action.type) {
    case SET_ROUTINE_LIST:
      return action.payload
    default:
      return state;
  }
};

export default routineList;
