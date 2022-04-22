import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import TrackCard from './TrackCard'

test("All components should be render", () => {
    render(<TrackCard />);

    const song = screen.getByTestedId("pict-song");
    const title = screen.getByTestedId("title-song");
    const detail = screen.getByTestedId("detail-song");
    const button = screen.getByTestedId("btn-song");

    expect(song).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(detail).toBeInTheDocument();


});
