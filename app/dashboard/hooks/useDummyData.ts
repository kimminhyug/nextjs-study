export interface DummyData {
  totalUsers: {
    text: string;
    subText: string;
  };
  activeUsers: {
    text: string;
    subText: string;
  };
  pageViews: {
    text: string;
    subText: string;
  };
  avgSessionTime: {
    text: string;
    subText: string;
  };
  trafficChart: {
    data: {
      labels: string[];
      datasets: {
        label: string;
        data: number[];
        borderColor: string;
        backgroundColor: string;
      }[];
    };
    option?: any;
  };
  userGrowthChart: {
    data: {
      labels: string[];
      datasets: {
        label: string;
        data: number[];
        borderColor: string;
        backgroundColor: string;
      }[];
    };
    option?: any;
  };
}

const generateRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateChartData = (label: string, color: string) => {
  const labels = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (6 - i));
    return `${date.getMonth() + 1}/${date.getDate()}`;
  });

  const data = Array.from({ length: 7 }, () => generateRandomNumber(10, 100));

  return {
    data: {
      labels,
      datasets: [
        {
          label,
          data,
          borderColor: color,
          backgroundColor: `${color}20`,
          tension: 0.4,
        },
      ],
    },
    option: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            display: false,
          },
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
    },
  };
};

export const generateDummyData = (): DummyData => {
  const totalUsers = generateRandomNumber(10000, 50000);
  const activeUsers = generateRandomNumber(5000, totalUsers);
  const pageViews = generateRandomNumber(100000, 500000);
  const avgMinutes = generateRandomNumber(2, 15);
  const avgSeconds = generateRandomNumber(0, 59);

  return {
    totalUsers: {
      text: totalUsers.toLocaleString(),
      subText: "전체 등록 사용자",
    },
    activeUsers: {
      text: activeUsers.toLocaleString(),
      subText: "오늘 활성 사용자",
    },
    pageViews: {
      text: pageViews.toLocaleString(),
      subText: "오늘 페이지뷰",
    },
    avgSessionTime: {
      text: `${avgMinutes}:${avgSeconds.toString().padStart(2, "0")}`,
      subText: "평균 세션 시간",
    },
    trafficChart: generateChartData("트래픽", "#8b5cf6"),
    userGrowthChart: generateChartData("사용자 증가", "#ef4444"),
  };
};
