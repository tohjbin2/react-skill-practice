import React, { useState, useEffect } from 'react';
import * as S from './Chart2.style';

import axios from 'axios';
import Posts from './PaginationPosts2/PaginationPosts2';
import PaginationBtn from './PaginationBtn2/PaginationBtn2';

const TITLE_CATEGORY = [
  { id: '1', name: '실적' },
  { id: '2', name: '경비' },
  { id: '3', name: '청소' },
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
      console.log(res.data.Data, '경비 데이터');
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
      }
      // res.status === 200
      setLoading(false);
      console.log(res2.data.Data, '청소 데이터');
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

  const [summaryModal, setSummaryModal] = useState(false);
  const [securityModal, setSecurityModal] = useState(false);
  const [cleanModal, setCleanModal] = useState(false);
  const onSummaryModal = () => {
    // e.preventDefault();
    setCleanModal(false);
    setSecurityModal(false);
    setSummaryModal(true);
  };
  const onSecurityModal = () => {
    // e.preventDefault();
    setSummaryModal(false);
    setCleanModal(false);
    setSecurityModal(true);
  };
  const onCleanModal = () => {
    // e.preventDefault();
    setSummaryModal(false);
    setSecurityModal(false);
    setCleanModal(true);
  };
  return (
    <S.Container>
      <S.Wrapper>
        <S.PostsTitle>
          {TITLE_CATEGORY.map((list, idx) => {
            if (list.id === '1') {
              return (
                <S.SecurityBtn
                  key={idx}
                  onClick={() => {
                    onSummaryModal();
                  }}
                >
                  {list.name}
                </S.SecurityBtn>
              );
            }
            if (list.id === '2') {
              return (
                <S.SecurityBtn
                  onClick={() => {
                    onSecurityModal();
                  }}
                >
                  {list.name}
                </S.SecurityBtn>
              );
            }
            if (list.id === '3') {
              return (
                <S.CleaningBtn onClick={() => onCleanModal()}>
                  {list.name}
                </S.CleaningBtn>
              );
            }
          })}
        </S.PostsTitle>

        <S.ContentsContainer>
          <S.PaginationContainer>
            <S.PostsContainer>
              {/* <Summary /> */}
              {securityModal && (
                <Posts posts={currentPosts} loading={loading} />
              )}
              {securityModal && (
                <PaginationBtn
                  postsPerPage={postsPerPage}
                  totalPosts={posts.length}
                  paginate={paginate}
                />
              )}

              {cleanModal && <Posts posts={currentPosts2} loading={loading} />}
              {cleanModal && (
                <PaginationBtn
                  postsPerPage={postsPerPage}
                  totalPosts={posts2.length}
                  paginate={paginate}
                />
              )}
            </S.PostsContainer>
          </S.PaginationContainer>
        </S.ContentsContainer>
      </S.Wrapper>
    </S.Container>
  );
}

export default Chart2;
