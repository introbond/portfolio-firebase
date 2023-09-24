import React, { FC } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface Certification {
    id: number;
    image_url: string;
}

interface CertificationCardProps {
    certification: Certification;
}

const CertificationCard: FC<CertificationCardProps> = ({ certification }) => {
    const navigate = useNavigate();
    const disableClick = window.matchMedia('(max-width: 600px)').matches;

    const [rotation, setRotation] = useState<{ x: number; y: number }>({
        x: 0,
        y: 0,
    });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);

        setRotation({
            x: -y / 20,
            y: x / 20,
        });
    };

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 });
    };

    const handleClick = () => {
        if (!disableClick) {
            navigate('/certification/' + certification.id);
        }
    };

    return (
        <div
            className="certification"
            onClick={handleClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `perspective(600px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            }}
        >
            <LazyLoadImage
                src={certification.image_url}
                alt=""
                effect="blur"
                className="bgImage"
            />
        </div>
    );
};

export default CertificationCard;