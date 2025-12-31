# 用户生命周期策略引擎网站 - 设计理念与架构规划

## 1. 设计理念 (Design Philosophy)

<response>
<text>
**Design Movement**: **Modern Analytical Dashboard (Neo-Brutalism meets Clean Corporate)**

**Core Principles**:
1.  **Data-First Clarity**: 数据是核心，设计应服务于数据的清晰展示，避免过度装饰干扰信息读取。
2.  **Action-Oriented**: 每个分析结果都应指向具体的行动（如“挽留”、“促销”），UI应引导用户从洞察走向决策。
3.  **Trust & Precision**: 使用精确的线条、高对比度的色彩和专业的排版，传达系统的可靠性和专业性。
4.  **Modular Flexibility**: 采用模块化卡片设计，适应不同类型的数据可视化需求，保持界面的整洁和可扩展性。

**Color Philosophy**:
*   **Primary**: **Deep Indigo (#4F46E5)** - 代表智慧、深度和专业，用于主导航和关键行动按钮。
*   **Secondary**: **Emerald Green (#10B981)** - 代表增长、健康和正向指标（如高价值用户、ROI正值）。
*   **Alert**: **Rose Red (#F43F5E)** - 代表流失风险、负面情绪和紧急关注项。
*   **Background**: **Off-White / Light Gray (#F9FAFB)** - 提供干净的背景，减少视觉疲劳，突出前景内容。
*   **Text**: **Slate (#1E293B)** - 高可读性的深灰色，避免纯黑的刺眼感。

**Layout Paradigm**:
*   **Sidebar Navigation**: 左侧固定导航栏，提供清晰的功能入口，适应复杂的后台系统结构。
*   **Dashboard Grid**: 首页采用灵活的网格布局，展示关键KPI卡片和概览图表。
*   **Drill-Down Structure**: 从宏观概览 -> 细分群体 -> 个体详情的层级结构，支持深度数据探索。

**Signature Elements**:
*   **Glassmorphism Cards**: 轻微的磨砂玻璃效果用于悬浮卡片，增加层次感。
*   **Crisp Borders**: 细致的边框和分割线，强化模块间的区分。
*   **Data Viz Accents**: 图表中使用高饱和度色彩点缀，引导视线聚焦关键数据点。

**Interaction Philosophy**:
*   **Hover-to-Reveal**: 鼠标悬停显示详细数据和操作选项，保持界面初始状态的简洁。
*   **Smooth Transitions**: 页面切换和数据加载采用平滑过渡，减少突兀感。
*   **Interactive Charts**: 图表支持缩放、筛选和点击联动，增强探索体验。

**Animation**:
*   **Subtle Entrance**: 页面元素按顺序轻微上浮淡入，营造流畅的加载体验。
*   **Micro-interactions**: 按钮点击、开关切换等操作伴随细腻的反馈动画。

**Typography System**:
*   **Headings**: **Plus Jakarta Sans** - 现代、几何感强，适合标题和数字展示。
*   **Body**: **Inter** - 清晰易读，适合正文和表格数据。
*   **Monospace**: **JetBrains Mono** - 用于代码片段、ID和精确数值展示。
</text>
<probability>0.08</probability>
</response>

<response>
<text>
**Design Movement**: **Futuristic Cyber-Data (Dark Mode Focus)**

**Core Principles**:
1.  **Immersive Analytics**: 沉浸式的暗色背景，让数据像发光体一样浮现，适合长时间专注分析。
2.  **High-Tech Aesthetic**: 运用霓虹光效、网格背景和科技感字体，营造未来策略引擎的氛围。
3.  **Dynamic Feedback**: 实时数据流动的视觉暗示，强调系统的实时性和智能化。

**Color Philosophy**:
*   **Background**: **Deep Space Black (#0B0C10)** - 极致的深黑背景。
*   **Primary**: **Cyan (#00FFFF)** - 高亮显示关键数据和交互点，充满科技感。
*   **Secondary**: **Electric Purple (#BF00FF)** - 用于辅助图形和次要信息。
*   **Text**: **White / Light Gray** - 在深色背景上保持高对比度。

**Layout Paradigm**:
*   **HUD-Style Interface**: 模仿平视显示器（HUD）的布局，关键指标悬浮于视野中心。
*   **Collapsible Panels**: 侧边栏和工具栏可折叠，最大化数据展示空间。

**Signature Elements**:
*   **Glowing Edges**: 元素边缘带有微弱的发光效果。
*   **Grid Backgrounds**: 背景叠加淡淡的网格纹理。
*   **Monospaced Headers**: 标题使用等宽字体，强化工程感。

**Interaction Philosophy**:
*   **Instant Response**: 极速的交互响应，配合清脆的音效（可选）。
*   **Data Streaming**: 数据加载模拟数据流传输的视觉效果。

**Animation**:
*   **Glitch Effects**: 偶发的故障艺术效果用于转场或强调。
*   **Scanning Lines**: 扫描线动画扫过图表区域。

**Typography System**:
*   **Headings**: **Rajdhani** - 方正、科技感强的字体。
*   **Body**: **Roboto** - 中性、易读。
</text>
<probability>0.05</probability>
</response>

<response>
<text>
**Design Movement**: **Organic Soft-Tech (Nature-Inspired)**

**Core Principles**:
1.  **Human-Centric**: 强调技术服务于人，界面柔和、友好，减少数据的冰冷感。
2.  **Organic Shapes**: 使用圆角、流体形状和自然色调，营造轻松的分析环境。
3.  **Storytelling**: 通过视觉流线引导用户阅读数据背后的故事。

**Color Philosophy**:
*   **Primary**: **Sage Green (#84A98C)** - 自然、平静。
*   **Secondary**: **Sand / Beige (#F5F3F4)** - 温暖的背景色。
*   **Accent**: **Terracotta (#E07A5F)** - 温暖的强调色。

**Layout Paradigm**:
*   **Card-Based Flow**: 卡片像鹅卵石一样排列，布局宽松自然。
*   **Asymmetric Balance**: 非对称布局，打破刻板的网格限制。

**Signature Elements**:
*   **Soft Shadows**: 弥散的柔和阴影。
*   **Rounded Corners**: 大圆角设计。
*   **Illustrative Icons**: 手绘风格的图标。

**Interaction Philosophy**:
*   **Gentle Feedback**: 柔和的动效和反馈。
*   **Scroll-Based Story**: 滚动页面时逐步展开内容。

**Animation**:
*   **Float**: 元素轻微浮动。
*   **Morph**: 形状平滑变形。

**Typography System**:
*   **Headings**: **Merriweather** - 优雅的衬线体。
*   **Body**: **Lato** - 圆润的无衬线体。
</text>
<probability>0.03</probability>
</response>

## 2. 选定方案 (Selected Approach)

**Design Philosophy**: **Modern Analytical Dashboard (Neo-Brutalism meets Clean Corporate)**

**理由**:
该方案最符合“策略引擎”的定位，既专业可靠，又具备现代SaaS产品的易用性。清晰的数据展示和行动导向的设计原则，能够帮助用户高效地从复杂数据中提取价值。深靛蓝与翡翠绿的配色方案既商务又充满活力，符合电商分析的场景。

## 3. 网站架构 (Site Architecture)

### 页面结构 (Page Structure)

1.  **Dashboard (首页)**
    *   **KPI Cards**: 总用户数、活跃用户、流失率、平均客单价(AOV)、总营收(GMV)。
    *   **Charts**: 每日营收趋势、新客增长趋势、RFM分层概览（饼图）。
    *   **Quick Actions**: 导入数据、运行模型、查看报告。

2.  **Data Management (数据管理)**
    *   **Upload**: 支持多CSV文件上传（Orders, Items, Customers, Reviews, Payments）。
    *   **Preview**: 数据预览表格，展示前10行。
    *   **Mapping**: 字段映射配置（如果需要）。
    *   **Status**: 数据完整性检查结果。

3.  **RFM Analysis (RFM分析)**
    *   **Segmentation**: RFM分层可视化（3D散点图或热力图）。
    *   **Segment Details**: 各分层（如Champions, At Risk）的用户数、贡献价值、特征描述。
    *   **User List**: 选中分层的用户列表，支持导出。

4.  **Churn Prediction (流失预测)**
    *   **Model Config**: 训练配置（流失定义天数、训练窗口）。
    *   **Model Performance**: ROC曲线、校准曲线、特征重要性排序。
    *   **Prediction Results**: 用户流失概率分布直方图。
    *   **High Risk List**: 高流失风险的高价值用户列表（重点挽留对象）。

5.  **Strategy Engine (策略引擎)**
    *   **Promotion Simulation**: 促销策略配置（目标人群、优惠券类型、面值）。
    *   **ROI Calculator**: 投入产出比模拟计算器（增量利润、成本预估）。
    *   **Simulation Results**: 模拟结果对比图（有策略 vs 无策略）。

6.  **Insights (扩展洞察)**
    *   **Recommendations**: 针对不同分层的商品推荐列表。
    *   **Sentiment Analysis**: 评论情感分布、关键词云、负面情绪预警。
    *   **Trends**: 品类销售趋势、热点话题追踪。

### 技术组件 (Technical Components)

*   **Frontend**: React 19, Tailwind CSS 4, Shadcn UI, Recharts/ECharts, Framer Motion.
*   **State Management**: React Context / Hooks.
*   **Data Processing**: 前端模拟后端逻辑（由于是静态模版，我们将用Mock数据和前端计算来演示核心逻辑）。
*   **Routing**: Wouter.

## 4. 下一步计划 (Next Steps)

1.  **Setup**: 安装必要的依赖（Recharts, Framer Motion, Lucide React）。
2.  **Layout**: 实现侧边栏布局 (DashboardLayout)。
3.  **Components**: 封装通用组件（KPI卡片、图表容器、数据表格）。
4.  **Pages**: 依次开发各个功能页面，优先实现Dashboard和RFM分析。
5.  **Mock Data**: 生成逼真的演示数据，确保在无后台情况下也能展示完整流程。
