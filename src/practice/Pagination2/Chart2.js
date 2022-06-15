import React, { useState, useEffect } from 'react';
import * as S from './Chart2.style';

import PaginationPosts from './PaginationPosts2/PaginationPosts2';
import PaginationBtn from './PaginationBtn2/PaginationBtn2';

import axios from 'axios';
// import CountUp from 'react-countup'; /* MEMO: 숫자 카운트 */

const TITLE_CHART_CATEGORY = [
  { id: '1', name: '1번' },
  { id: '2', name: '2번' },
];

function Chart2() {
  // IMPORTANT: 페이지네이션 관련-----start
  const [posts, setPosts] = useState([]); // MEMO: '경비' 데이터
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // MEMO: 현재 페이지 위치
  const [postsPerPage, setPostsPerPage] = useState(10); // MEMO: 페이지당 포스트 개수
  // IMPORTANT: 페이지네이션 관련-----end
  const [posts2, setPosts2] = useState([]); // MEMO: '청소' 데이터

  // IMPORTANT: 페이지네이션 관련-----start
  // MEMO: 목데이터 ->/data/recordData.json
  // MEMO: 경비 URL ->http://dev.mmigroup.co.kr:7050/home/contract/list?ItemPerPage=0&ItemStartPage=0&Group=6&Valid=1
  // MEMO: 미화 URL ->http://dev.mmigroup.co.kr:7050/home/contract/list?ItemPerPage=0&ItemStartPage=0&Group=7&Valid=1
  // IMPORTANT: 경비
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      // const res = await axios.get('/data/contract-list-security-response.json');
      const res = await axios.get('/data/contract-list-security-response.json');
      if (res.data.ErrorCode === 0) {
        setPosts(res.data.Data); // IMPORTANT
      }
      // res.status === 200
      setLoading(false);
    };
    fetchPosts();
  }, []);

  // IMPORTANT: 청소
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      // const res = await axios.get('/data/contract-list-security-response.json');
      const res2 = await axios.get('/data/contract-list-clean-response.json');
      if (res2.data.ErrorCode === 0) {
        setPosts2(res2.data.Data); // IMPORTANT
        setSecurityModal(true);
      }
      // res.status === 200
      setLoading(false);
    };
    fetchPosts();
  }, []);
  // IMPORTANT: 페이지네이션 관련-----end

  // IMPORTANT: 페이지네이션 관련-----start
  // MEMO: get current Posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost); // MEMO: '경비' 현재 페이지
  // IMPORTANT: 페이지네이션 관련-----end
  const currentPosts2 = posts2.slice(indexOfFirstPost, indexOfLastPost); // MEMO: '청소' 현재 페이지

  // IMPORTANT: 페이지네이션 관련-----start
  // MEMO: change page 페이지를 바꾸기 위한 버튼
  const paginate = pageNumber => setCurrentPage(pageNumber);
  // IMPORTANT: 페이지네이션 관련-----end

  const [securityModal, setSecurityModal] = useState(false);
  const [cleanModal, setCleanModal] = useState(false);
  const onSecurityModal = () => {
    // e.preventDefault();
    setCleanModal(false);
    setSecurityModal(true);
  };
  const onCleanModal = () => {
    // e.preventDefault();
    setSecurityModal(false);
    setCleanModal(true);
  };

  return (
    <S.Container>
      <S.TitleContainer>
        <S.TitleWrap>
          <S.MainTitle>
            개발 <br />
            잘하고싶다!
          </S.MainTitle>
        </S.TitleWrap>
      </S.TitleContainer>

      <S.Wrapper>
        <S.ChartContainer>
          <S.SubTitle>
            <div>
              <p>페이지네이션2</p>
            </div>
          </S.SubTitle>
          {/* 페이지네이션 ---start */}
          <S.PostsTitle>
            {TITLE_CHART_CATEGORY.map((list, idx) => {
              if (list.id === '1') {
                return (
                  <S.SecurityBtn
                    key={idx}
                    onClick={() => {
                      onSecurityModal();
                    }}
                  >
                    <div>
                      <p>{list.name}</p>
                    </div>
                  </S.SecurityBtn>
                );
              }
              if (list.id === '2') {
                return (
                  <S.CleaningBtn onClick={() => onCleanModal()}>
                    <div>
                      <p>{list.name}</p>
                    </div>
                  </S.CleaningBtn>
                );
              }
            })}
          </S.PostsTitle>

          <S.PaginationContainer>
            <S.PaginationWrap>
              <S.PostsContainer>
                {securityModal && (
                  <PaginationPosts posts={currentPosts} loading={loading} />
                )}
                {securityModal && (
                  <PaginationBtn
                    postsPerPage={postsPerPage}
                    totalPosts={posts.length}
                    paginate={paginate}
                  />
                )}
                {cleanModal && (
                  <PaginationPosts posts={currentPosts2} loading={loading} />
                )}
                {cleanModal && (
                  <PaginationBtn
                    postsPerPage={postsPerPage}
                    totalPosts={posts2.length}
                    paginate={paginate}
                  />
                )}
              </S.PostsContainer>
            </S.PaginationWrap>
          </S.PaginationContainer>
          {/* 페이지네이션 ---end */}
        </S.ChartContainer>
      </S.Wrapper>
    </S.Container>
  );
}

export default Chart2;
