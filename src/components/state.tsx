"use client";

import { Button } from "@/ui/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledState = styled.div`
    padding: 20px;
    background-color: white;
    margin-top: 25px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const StyledClubContainer = styled.div`
    display: flex;
    gap: 5px;
    flex-direction: column;
    & > p {
        font-size: 1rem;
        font-weight: bold;
        color: var(--Gray);
    }
`;
const StyledClub = styled.div`
    padding: 20px;
    background-color: var(--BackGray);
    display: flex;
`;

const StyledStatusMessage = styled.div`
    display: flex;
    flex-direction: column;

    gap: 5px;
    & > h1 {
        font-size: 1.3rem;
        font-weight: bold;
        color: var(--Gray);
    }
    & > h1 > span {
        color: var(--FontColor);
    }
    & > p {
        font-size: 1rem;
        font-weight: bold;
        color: var(--Gray);
    }
`;

const StyledStatusContainer = styled.div`
    width: 80%;
    margin: auto;
`;
const StyledStatusInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    & > p {
        font-size: 1rem;
        font-weight: bold;
        color: var(--Gray);
    }
`;

function State() {
    const [status, setStatus] = useState("상태로딩중..");
    useEffect(() => {
        axios.get("/api/user").then((res) => {
            setStatus(res.data.status);
        });
    }, []);
    return (
        <StyledState>
            <StyledClubContainer>
                <p>현재 활동</p>
                <StyledClub>
                    <StyledStatusContainer>
                        <StyledStatusMessage>
                            <h1>
                                <span>심호성</span>님은 현재
                            </h1>
                            <p>{status}</p>
                        </StyledStatusMessage>
                    </StyledStatusContainer>
                </StyledClub>
            </StyledClubContainer>
            <Button>활동 변경</Button>
        </StyledState>
    );
}

export default State;
