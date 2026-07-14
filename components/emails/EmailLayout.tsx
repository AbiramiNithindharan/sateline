import { ReactNode } from "react";

interface EmailLayoutProps {
  title: string;
  children: ReactNode;
}

export default function EmailLayout({ title, children }: EmailLayoutProps) {
  return (
    <html>
      <body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: "#f5f7fb",
          fontFamily: "Inter, Arial, Helvetica, sans-serif",
        }}
      >
        <table
          width="100%"
          cellPadding={0}
          cellSpacing={0}
          style={{ padding: "40px 0" }}
        >
          <tbody>
            <tr>
              <td align="center">
                <table
                  width="640"
                  cellPadding={0}
                  cellSpacing={0}
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "16px",
                    overflow: "hidden",
                  }}
                >
                  {/* Header */}

                  <tbody>
                    <tr>
                      <td
                        style={{
                          backgroundColor: "#0f172a",
                          padding: "36px",
                          textAlign: "center",
                        }}
                      >
                        <div style={{ display: "flex", gap: "2" }}>
                          <img
                            src="https://www.sateline.co.in/logo.png"
                            alt="Sateline logo"
                            style={{
                              height: "28px",
                              width: "28px",
                              borderRadius: "10px",
                            }}
                          />
                          <h1
                            style={{
                              color: "#ffffff",
                              margin: 0,
                              fontSize: "28px",
                            }}
                          >
                            Sateline Software Technologies
                          </h1>
                        </div>

                        <p
                          style={{
                            color: "#cbd5e1",
                            marginTop: "12px",
                          }}
                        >
                          Building Modern Software Solutions
                        </p>
                      </td>
                    </tr>

                    {/* Body */}

                    <tr>
                      <td
                        style={{
                          padding: "40px",
                        }}
                      >
                        <h2
                          style={{
                            color: "#111827",
                            marginTop: 0,
                          }}
                        >
                          {title}
                        </h2>

                        {children}
                      </td>
                    </tr>

                    {/* Footer */}

                    <tr>
                      <td
                        style={{
                          backgroundColor: "#f8fafc",
                          padding: "24px",
                          textAlign: "center",
                          color: "#64748b",
                          fontSize: "14px",
                        }}
                      >
                        © {new Date().getFullYear()} Sateline Software
                        Technologies
                        <br />
                        Namakkal, Tamil Nadu, India
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    </html>
  );
}
