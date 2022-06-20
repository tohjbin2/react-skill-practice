import React, { useState, useEffect } from 'react';
import * as S from './Chart1.style';

import axios from 'axios';
import Posts from './PaginationPosts1/PaginationPosts1';
import PaginationBtn from './PaginationBtn1/PaginationBtn1';

function Chart1() {
  // IMPORTANT: 페이지네이션 관련-----start
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // MEMO: 현재 페이지 위치
  const [postsPerPage, setPostsPerPage] = useState(10); // MEMO: 페이지당 포스트 개수
  // IMPORTANT: 페이지네이션 관련-----end

  // IMPORTANT: 페이지네이션 관련-----start
  // MEMO: 목데이터 ->/data/recordData.json
  // MEMO: 경비 URL ->http://dev.mmigroup.co.kr:7050/home/contract/list?ItemPerPage=0&ItemStartPage=0&Group=6&Valid=1
  // MEMO: 미화 URL ->http://dev.mmigroup.co.kr:7050/home/contract/list?ItemPerPage=0&ItemStartPage=0&Group=7&Valid=1
  // IMPORTANT, MEMO: 경비
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('/data/contract-list-security-response.json');
      setPosts(res.data.Data); // IMPORTANT
      setLoading(false);
    };
    fetchPosts();
  }, []);
  //
  // IMPORTANT: 페이지네이션 관련-----end

  // IMPORTANT: 페이지네이션 관련-----start
  // MEMO: get current Posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  // IMPORTANT: 페이지네이션 관련-----end

  // IMPORTANT: 페이지네이션 관련-----start
  // MEMO: change page 페이지를 바꾸기 위한 버튼
  const paginate = pageNumber => setCurrentPage(pageNumber);
  // IMPORTANT: 페이지네이션 관련-----end

  return (
    <S.Container>
      <S.Wrapper>
        <S.ContentsContainer>
          <S.PaginationContainer>
            <S.PostsContainer>
              <Posts posts={currentPosts} loading={loading} />

              {/* IMPORTANT 원본-----start */}
              {/* <Posts posts={currentPosts} loading={loading} /> */}
              {/* <PaginationBtn
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
              /> */}
              {/* IMPORTANT 원본-----end */}
            </S.PostsContainer>
            <PaginationBtn
              postsPerPage={postsPerPage}
              totalPosts={posts.length}
              paginate={paginate}
            />
          </S.PaginationContainer>
        </S.ContentsContainer>
      </S.Wrapper>
    </S.Container>
  );
}

export default Chart1;
