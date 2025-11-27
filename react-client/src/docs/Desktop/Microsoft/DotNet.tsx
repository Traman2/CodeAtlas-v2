import { Icon } from "@iconify/react";
import CodeBlock from '../../../components/CodeBlock';
import type { GuideMetadata } from '../../../types/GuideMetadata';

export const sections = [
    { id: "overview", title: ".NET Desktop Overview" },
    { id: "frameworks", title: "Framework Options" },
    { id: "getting-started", title: "Getting Started" },
    { id: "winui-example", title: "WinUI Example" },
    { id: "wpf-example", title: "WPF Example" },
    { id: "best-practices", title: "Best Practices" }
]

export const metadata: GuideMetadata = {
    id: 'desktop-dotnet',
    title: '.NET Desktop Development',
    category: 'DESKTOP',
    path: '/alldocs/desktop/dotnet',
    keywords: ['dotnet', 'windows', 'winui', 'wpf', 'maui', 'desktop'],
    description: 'Build Windows desktop apps using .NET, WinUI, WPF, and MAUI. Covers setup, examples, and best practices.',
    searchableContent: `
        .NET Desktop Development
        WinUI WPF MAUI guide
    `.trim()
};

const installDotnet = `
# Install .NET SDK
# Windows: Download from https://dotnet.microsoft.com/download
# macOS/Linux: use package manager or official installer

# Verify installation
dotnet --version

# Install workloads
dotnet workload install maui
dotnet workload install windows

# Install Visual Studio (Windows) or VS Code (cross-platform)
`;

const winuiExample = `
// MainWindow.xaml.cs (WinUI 3)
using Microsoft.UI.Xaml;
using Microsoft.UI.Xaml.Controls;

namespace MyApp;

public sealed partial class MainWindow : Window
{
    public MainWindow()
    {
        this.InitializeComponent();
    }
}

// MainWindow.xaml
<Window
    x:Class="MyApp.MainWindow"
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
    xmlns:local="using:MyApp"
    Title="My WinUI App">

    <StackPanel Padding="24" Spacing="16">
        <TextBlock Text="WinUI 3 Desktop App"
                   FontSize="28"
                   FontWeight="Bold" />
        <TextBox x:Name="InputBox"
                 PlaceholderText="Enter text" />
        <Button Content="Show Message"
                Click="OnShowMessage"/>
    </StackPanel>
</Window>

// MainWindow.xaml.cs (button handler)
private void OnShowMessage(object sender, RoutedEventArgs e)
{
    var dialog = new ContentDialog
    {
        Title = "Message",
        Content = $"You typed: {InputBox.Text}",
        CloseButtonText = "OK",
        XamlRoot = this.Content.XamlRoot
    };
    _ = dialog.ShowAsync();
}
`;

const wpfExample = `
// MainWindow.xaml (WPF)
<Window x:Class="WpfApp.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        Title="WPF App" Height="450" Width="800">
    <Grid>
        <StackPanel Margin="20" VerticalAlignment="Center">
            <TextBlock Text="WPF Desktop App"
                       FontSize="24"
                       Margin="0 0 0 20"/>
            <TextBox Name="InputBox" Margin="0 0 0 10"/>
            <Button Content="Show Message" Click="Button_Click"/>
        </StackPanel>
    </Grid>
</Window>

// MainWindow.xaml.cs
private void Button_Click(object sender, RoutedEventArgs e)
{
    MessageBox.Show($"You typed: {InputBox.Text}", "WPF App");
}
`;

const frameworksList = `
Framework       Best For                                 Notes
-----------     ---------------------------------------   --------------------------------------------
WinUI 3         Modern Windows desktop apps               Fluent design, future of Windows UI
WPF             Enterprise desktop, legacy support        Mature, powerful data binding
MAUI            Cross-platform (Win, macOS, iOS, Android) Single project, XAML UI
Windows Forms  Legacy business apps                       Easy, but limited modern UI
`;

export default function DotNetDocs() {
    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">MICROSOFT STACK</p>

            <h1 className="text-3xl font-semibold mt-2 mb-4">
                .NET Desktop Development
            </h1>

            <p className="mt-4 mb-6 leading-relaxed text-lg">
                Build Windows desktop applications using .NET, WinUI, WPF, and MAUI.
            </p>

            <div className="w-full flex justify-center mb-20">
                <Icon icon="mdi:microsoft" className="w-70 h-70 text-[#0078D4]"/>
            </div>

            <h2 id="overview" className="text-2xl font-semibold mt-12 mb-4">
                Why .NET for Desktop?
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                .NET provides mature, enterprise-ready tools for building Windows desktop apps. WinUI is the modern
                UI framework, WPF remains popular, and MAUI offers cross-platform capabilities.
            </p>

            <h2 id="frameworks" className="text-2xl font-semibold mt-12 mb-4">
                Framework Options
            </h2>

            <div className="mb-6">
                <CodeBlock code={frameworksList} language="text" />
            </div>

            <h2 id="getting-started" className="text-2xl font-semibold mt-12 mb-4">
                Getting Started
            </h2>

            <div className="mb-6">
                <CodeBlock code={installDotnet} language="bash" />
            </div>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <div className="flex items-start gap-3">
                    <Icon icon="mdi:lightbulb-on" width="28" height="28" className="text-[#554DE2] shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Recommended IDEs</h3>
                        <ul className="space-y-1 text-[#4B5563]">
                            <li>• <strong>Visual Studio</strong> (Windows) - best tooling for WinUI/WPF</li>
                            <li>• <strong>Visual Studio Code</strong> - cross-platform editor for MAUI</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h2 id="winui-example" className="text-2xl font-semibold mt-12 mb-4">
                WinUI 3 Example
            </h2>

            <div className="mb-6">
                <CodeBlock code={winuiExample} language="xml" />
            </div>

            <h2 id="wpf-example" className="text-2xl font-semibold mt-12 mb-4">
                WPF Example
            </h2>

            <div className="mb-6">
                <CodeBlock code={wpfExample} language="xml" />
            </div>

            <h2 id="best-practices" className="text-2xl font-semibold mt-12 mb-4">
                Best Practices
            </h2>

            <div className="space-y-4 mb-8">
                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">1. Use MVVM Architecture</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Separate UI (View) from business logic (ViewModel) to improve testability and maintainability.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">2. Leverage Data Binding</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Use bindings for UI updates instead of manual event handlers whenever possible.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">3. Integrate with ASP.NET</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Build ASP.NET APIs for backend services your desktop app can consume.
                    </p>
                </div>
            </div>
        </>
    )
}

